'use strict'
const _pkg = require('../package')
module.exports = function (options) {
  options = options || {};
  function minify(file, _, cb) {
    if (file.isNull()) {
      this.push(file);
      return cb();
    }
    const _this = this;
    if (file.isStream()) {
      throw new _pkg.PluginError('@hcjlab/core#jsmin', 'Streaming not supported');
    }

    let script = file.contents.toString();
    try {
      let result = _pkg.uglifyJS.minify(script, options);
      if (!result || result.error) {
        const message = new _pkg.PluginError('@hcjlab/core#jsmin', 'uglify-es minify error.' + result.error)
        process.stderr.write(`${message}\n`);
        _this.emit('end');
      }
      file.contents = new Buffer.from(result.code);
      cb(null, file);
    } catch (err) {
      const message = new _pkg.PluginError('@hcjlab/core#jsmin', err, { fileName: file.path });
      process.stderr.write(`${message}\n`);
      _this.emit('end');
    }
  }

  return _pkg.through2.obj(minify);
};