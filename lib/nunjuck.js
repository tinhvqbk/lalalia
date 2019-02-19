'use strict'
const _pkg = require('../package')  
//Fork from gulp-nunjucks-render
module.exports = function (options) {
  let defaults = {
    path: '.',
    ext: '.html',
    data: {},
    inheritExtension: false,
    envOptions: {
      watch: false
    },
    manageEnv: null
  };
  options = _pkg._.defaultsDeep(options || {}, defaults);
  _pkg.nunjucks.configure(options.envOptions)
  if (!options.loaders) {
    options.loaders = new _pkg.nunjucks.FileSystemLoader(options.path);
  }
  const compile = new _pkg.nunjucks.Environment(options.loaders, options.envOptions);
  if (_pkg._.isFunction(options.manageEnv)) {
    options.manageEnv.call(null, compile);
  }
  return _pkg.through2.obj(function(file, enc, cb) {
    let data = _pkg._.cloneDeep(options.data);
    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.data) {
      data = _pkg._.merge(file.data, data);
    }

    if (file.isStream()) {
      this.emit('error', new _pkg.PluginError('@hcjlab/core#njk', 'Streaming not supported'));
      return cb();
    }

    const _this = this;

    const filePath = file.path;

    try {
      compile.renderString(file.contents.toString(), data, function (err, result) {
        if (err) {
          _this.emit('error', new _pkg.PluginError('@hcjlab/core#njk', err, {fileName: filePath}));
          return cb();
        }
        file.contents = new Buffer.from(result);
        if (!options.inheritExtension) {
          file.path = _pkg.replaceExtension(filePath, options.ext);
        }
        _this.push(file);
        cb();
      });
    } catch (err) {
      _this.emit('error', new _pkg.PluginError('@hcjlab/core#njk', err, {fileName: filePath}));
      cb();
    }
  });

}