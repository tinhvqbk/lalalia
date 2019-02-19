'use strict'
const _pkg = require('../package')
module.exports = function(options) {
  options = options || {};
  function minify (file, _, cb) {
      if (file.isNull()) {
        this.push(file);
        return cb();
      }

      if (file.isStream()) {
        throw new _pkg.PluginError('@hcjlab/core#jsmin', 'Streaming not supported');
      }

      let script = file.contents.toString('utf8');
      try {
          let result = _pkg.uglifyES.minify(script, options);
          if (!result || result.error) {
            throw new _pkg.PluginError('@hcjlab/core#jsmin', 'uglify-es minify error.' + result.error);
        }
        file.contents = new Buffer(result.code);
        cb(null, file);
      } catch (err) {
        throw  new _pkg.PluginError('@hcjlab/core#jsmin', err, {fileName: file.path});         
      }
  }

  return _pkg.through2.obj(minify);
};