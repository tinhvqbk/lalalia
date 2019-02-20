'use strict'
const _pkg = require('../package')
const _sass = require('./style')
const _html = require('./html')
const _script = require('./script')
const _data = require('./data')
function init(_config, _option) {
  const _sync = _pkg.browser.create()
  _sync.init({
    server: {
      notify: false,
      baseDir: [_config.paths.dest.root],
      directory: true
    }
  })
  _pkg.chokidar.watch([
    _config.paths.src.data + '/**/*',
    _config.paths.src.svg + '/**/*',
    _config.paths.src.sass + '/**/*',
    _config.paths.src.script + '/**/*',
    _config.paths.src.templates + '/**/*',
  ]).on('all', (event, path) => {
    if (event == 'change') {
      const extFile = _pkg.path.extname(path)
      _pkg.log.info('[%s] %s %s', _pkg.colors.blue('Watch'), _pkg.colors.cyan(path), event)
      if (extFile === '.scss' || extFile === '.css') {
        _sass.init(_config, _option).then(() => {
          _sync.reload()
        })
      }
      if (extFile === '.njk' || extFile === '.svg') {
        _html.init(_config, _option).then(() => {
          _sync.reload()
        })
      }
      if (extFile === '.js' || extFile === '.jsx' || extFile === '.mjs') {
        _script.init(_config, _option).then(() => {
          _sync.reload()
        })
      }
      if (extFile === '.json') {
        _data.init(_config, _option).then(() => {
          _html.init(_config, _option).then(() => {
            _sync.reload()
          })
        })
      }
    }
  })
  _pkg.chokidar.watch([
    _config.paths.src.assets
  ]).on('all', (event) => {
    if (event == 'change' || event == 'unlink') {
      _pkg.lib.fileSync(_config.paths.src.images, _config.paths.dest.images)
      _pkg.lib.fileSync(_config.paths.src.otherassets, _config.paths.dest.otherassets)
    }
  })
}

module.exports = {
  "init": init
}