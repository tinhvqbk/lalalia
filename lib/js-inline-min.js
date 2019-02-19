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
        throw new _pkg.PluginError('@hcjlab/core#jsinlinemin', 'Streaming not supported');
      }

      let html = file.contents.toString('utf8');
      let reg = /(<script(?![^>]*?\b(type=['"]text\/template['"]|src=["']))[^>]*?>)([\s\S]*?)<\/script>/g;
      let isMinify = false;
      html = html.replace(reg, function(str, tagStart, attr, script) {
        try {
            let result = _pkg.uglifyES.minify(script, options);
            isMinify = true;
            if (!result || result.error) {
              throw new _pkg.PluginError('@hcjlab/core#jsinlinemin', 'uglify-es minify error.' + result.error);
          }
            
            return tagStart + result.code + '</script>';
        } catch (err) {
          throw  new _pkg.PluginError('@hcjlab/core#jsinlinemin', err, {fileName: file.path});         
        }
      });    
      if (isMinify) {
          file.contents = new Buffer(html);
      }
      cb(null, file);
  }

  return _pkg.through2.obj(minify);
};