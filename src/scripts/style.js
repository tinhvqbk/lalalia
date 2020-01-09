'use strict'
const _pkg = require('../package')
function init(_config,_option) {
  const dest = _option.hash?_config.paths.src.css: _config.paths.dest.css
  let postcssPlugins = [
    _pkg.postcssImport(),
    _pkg.autoprefixer(),
  ];
  if(_option.cssOptimize || _option.minify) {
    postcssPlugins.push(_pkg.cssnano({ zindex: false }));
  }
  const outputStyle = (_option.cssOptimize || _option.minify)?'compressed':'expanded'
  return new Promise(res => {
    _pkg.gulp.src(_config.paths.src.sass + '/**/*.scss')
    .pipe(
      _pkg.gulpSass({
        includePaths: ['./node_modules'],
        sourceComments: 'map',
        sourceMap: 'sass',
        outputStyle: outputStyle
      }).on('error', _pkg.gulpSass.logError))
    .pipe(_pkg.gulpPostcss(postcssPlugins))
    .pipe(_pkg.gulp.dest(dest))
    .on('end', res)
  })
}
module.exports = {
  "init": init
}




