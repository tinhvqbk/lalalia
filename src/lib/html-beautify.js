'use strict'
const _pkg = require('../package')
module.exports = function (options) {
  return _pkg.through2.obj(function(file, enc, next) {
    if (file.isNull()) {
      next(null, file);
      return;
    }

    const minify =  function(buf, _, cb) {
      try {
        let contents = Buffer.from(_pkg.beautify.html(buf.toString().replace(/^\s*[\r\n]/gm, ''), options));
        if (next === cb) {
          file.contents = contents;
          cb(null, file);
          return;
        }
        cb(null, contents);
        next(null, file);
      } catch (err) {
        let opts = Object.assign({}, options, { fileName: file.path });
        let error = new _pkg.PluginError('lalalia#htmlbeautify', err, opts);
        if (next !== cb) {
          next(error);
          return;
        }
        cb(error);
      }
    };
    if (file.isStream()) {
      file.contents = file.contents.pipe(_pkg.through(minify));
    } else {
      minify(file.contents, null, next);
    }
  });
};