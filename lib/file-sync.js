'use strict'
const _pkg = require('../package')
//Fork from gulp-file-sync
const isIgnored = (options, stats, file) => {
  if (options.ignore) {
    if (Array.isArray(options.ignore)) {
      return options.ignore.some(function (filter) {
        return isIgnored({ ignore: filter }, stats, file)
      })
    } else {
      const ignoreFileType = typeof options.ignore;
      if (ignoreFileType === 'function') {
        return options.ignore(stats, file)

      } else if (ignoreFileType === 'string') {
        return options.ignore === file

      } else {
        let matcheFile = options.ignore.exec(file)
        return matcheFile && matcheFile.length > 0;
      }
    }
  }
  return false
}
const isSameFile = (src, dest) => {
  let crcSrc = _pkg.crc.crc32(_pkg.fsEx.readFileSync(src)).toString(16),
    crcDest = _pkg.crc.crc32(_pkg.fsEx.readFileSync(dest)).toString(16)
  return crcSrc === crcDest
}
const remove = (options, src, dest) => {
  let files = _pkg.fsEx.readdirSync(dest)
  files.forEach(function (file) {
    let fullPathSrc = _pkg.path.join(src, file),
      fullPathDest = _pkg.path.join(dest, file),
      statDest = _pkg.fsEx.statSync(fullPathDest)
    if (isIgnored(options, statDest, file)) {
      return;
    }
    if (statDest.isDirectory() && !options.recursive) {
      return;
    }
    if (!_pkg.fsEx.existsSync(fullPathSrc)) {
      options.beforeDeleteFileCallback && options.beforeDeleteFileCallback(fullPathSrc);
      _pkg.fsEx.removeSync(fullPathDest);
      options.deleteFileCallback(fullPathSrc, fullPathDest);

    } else {
      let statSrc = _pkg.fsEx.statSync(fullPathSrc);
      if (statSrc.isFile() !== statDest.isFile() || statSrc.isDirectory() !== statDest.isDirectory()) {
        options.beforeDeleteFileCallback && options.beforeDeleteFileCallback(fullPathSrc);
        _pkg.fsEx.removeSync(fullPathDest);
        options.deleteFileCallback(fullPathSrc, fullPathDest);
      } else if (statDest.isDirectory()) {
        remove(options, fullPathSrc, fullPathDest)
      }
    }
  })
}
const add = (options, src, dest) => {
  let files = _pkg.fsEx.readdirSync(src)
  files.forEach(function (file) {
    if ((/(^|\/)\.[^\/\.]/g).test(file)) {
      return;
    }
    let fullPathSrc = _pkg.path.join(src, file),
      fullPathDest = _pkg.path.join(dest, file),
      existsDest = _pkg.fsEx.existsSync(fullPathDest),
      statSrc = _pkg.fsEx.statSync(fullPathSrc)
    if (isIgnored(options, statSrc, file)) {
      return;
    }
    if (statSrc.isFile()) {
      if (existsDest) {
        let statDest = _pkg.fsEx.statSync(fullPathDest);
        if (statDest.isFile()) {
          if (!isSameFile(fullPathSrc, fullPathDest)) {
            options.beforeUpdateFileCallback && options.beforeUpdateFileCallback(fullPathSrc);
            _pkg.fsEx.copySync(fullPathSrc, fullPathDest, { force: true });
            options.updateFileCallback(fullPathSrc, fullPathDest);
          }
        }
      } else {
        options.beforeAddFileCallback && options.beforeAddFileCallback(fullPathSrc);
        _pkg.fsEx.copySync(fullPathSrc, fullPathDest, { force: true });
        options.addFileCallback(fullPathSrc, fullPathDest);
      }
    } else if (statSrc.isDirectory()) {
      if (!options.recursive) {
        return;
      }
      add(options, fullPathSrc, fullPathDest)
    }
  })
}
module.exports = (src, dest, options) => {
  if (typeof (src) !== 'string') {
    throw new _pkg.PluginError('@hcjlab/core#filesync', 'Missing source directory or type is not a string.')
  }
  if (typeof (dest) !== 'string') {
    throw new _pkg.PluginError('@hcjlab/core#filesync', 'Missing destination directory or type is not a string.')
  }
  options = options || {}
  options.recursive = (options.recursive === undefined) || options.recursive
  options.addFileCallback = options.addFileCallback || ((fullPathSrc, fullPathDest) => {
    _pkg.log.info('[%s] %s add', _pkg.colors.blue('Filesync'), _pkg.colors.cyan(fullPathSrc))

  })
  options.deleteFileCallback = options.deleteFileCallback || ((fullPathSrc, fullPathDest) => {
    _pkg.log.info('[%s] %s delete', _pkg.colors.blue('Filesync'), _pkg.colors.cyan(fullPathSrc))
  })
  options.updateFileCallback = options.updateFileCallback || ((fullPathSrc, fullPathDest) => {
    _pkg.log.info('[%s] %s change', _pkg.colors.blue('Filesync'), _pkg.colors.cyan(fullPathSrc))
  })
  _pkg.fsEx.ensureDirSync(dest)
  remove(options, src, dest)
  add(options, src, dest)
}