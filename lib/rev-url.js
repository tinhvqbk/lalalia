'use strict'
const _pkg = require('../package')  
//Fork from gulp-rev-css-url
module.exports = function () {
  var allowedPathRegExp = /\.(scss|less|stylus|css)$/;

  function md5(str) {
      return _pkg.crypto.createHash('md5').update(str, 'utf8').digest('hex');
  }

  function relPath(base, filePath) {
      if (filePath.indexOf(base) !== 0) {
          return filePath;
      }
      var newPath = filePath.substr(base.length);
      if (newPath[0] === _pkg.path.sep) {
          return newPath.substr(1);
      } else {
          return newPath;
      }
  }

  var f = [];

  return _pkg.through2.obj(function (file, enc, cb) {
      var firstFile = null;

      file.skipHash = !file.revOrigPath;
      file.revOrigPath = file.revOrigPath || file.path;
      file.revOrigBase = file.revOrigBase || file.base;

      if (file.path && file.revOrigPath) {
          firstFile = firstFile || file;
          var _relPath = relPath(_pkg.path.resolve(firstFile.revOrigBase), file.revOrigPath);

          f.push({
              origPath: _relPath,
              hashedPath: relPath(_pkg.path.resolve(firstFile.base), file.path),
              file: file
          });
      }
      cb();
  }, function (cb) {
      var self = this;

      // sort by filename length to not replace the common part(s) of several filenames
      var longestFirst = f.slice().sort(function (a, b) {
          if(a.origPath.length > b.origPath.length) return -1;
          if(a.origPath.length < b.origPath.length) return 1;
          return 0;
      });

      f.forEach(function (_f) {
          var file = _f.file;

          if ((allowedPathRegExp.test(file.revOrigPath) ) && file.contents) {
              var contents = file.contents.toString();
    
              longestFirst.forEach(function (__f) {
                  var origPath = __f.origPath.replace(new RegExp('\\' + _pkg.path.sep, 'g'), '/').replace(/\./g, '\\.');
                  var hashedPath = __f.hashedPath.replace(new RegExp('\\' + _pkg.path.sep, 'g'), '/');
                  contents = contents.replace(
                      new RegExp(origPath, 'g'),
                      hashedPath);
              });

              file.contents = new Buffer(contents);

              if (!file.skipHash) {
                  // update file's hash as it does in gulp-rev plugin
                  var hash = file.revHash = md5(contents).slice(0, 10);
                  var ext = _pkg.path.extname(file.path);
                  var filename = _pkg.path.basename(file.revOrigPath, ext) + '-' + hash + ext;
                  file.path = _pkg.path.join(_pkg.path.dirname(file.path), filename);
              }

          }
          self.push(file);
      });
      cb();
  });
};