'use strict'
const _pkg = require('../package')
function init(_config, _option) {
  const dest = _option.hash ? _config.paths.src.js : _config.paths.dest.js
  const webpackMode = (_option.jsOptimize || _option.minify) ? 'production' : 'development'
  return new Promise(res => {
    _pkg.gulp.src(_config.paths.src.script + '/**/*.+(js|mjs|jsx)')
      .pipe(_pkg.webpackStream({
        mode: webpackMode,
        output: {
          filename: 'app.js'
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  plugins: [
                    '@babel/plugin-proposal-class-properties'
                  ]
                }
              }
            }
          ]
        }
      }, _pkg.webpack))
      .pipe(_pkg.gulp.dest(dest))
      .on('end', res)
  })
}

module.exports = {
  "init": init
}
