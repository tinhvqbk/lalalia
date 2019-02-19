'use strict'
const _pkg = require('../package')  
function revCollector(_config){
  return _pkg.gulp.src([
    _config.paths.root + 'rev-manifest.json',
    _config.paths.dest + '/**/*.html',
    
  ])
  .pipe(_pkg.revCollector({ replaceReved: true }))
  .pipe(_pkg.gulp.dest(_config.paths.dest))
}
function init(_config,_option){
    const dest = _option.hash?_config.paths.tmp.root : _config.paths.dest.root
    return _pkg.gulp.src([_config.paths.src.templates + '/pages/**/*.njk'])
    .pipe(_pkg.lib.nunjuck({
      path: [
        _config.paths.src.svg,
        _config.paths.src.templates + '/pages/',
        _config.paths.src.templates + '/partials/',
        _config.paths.src.templates + '/layouts/'
      ],
      // data: _data.stream(_config),
      data: JSON.parse(_pkg.fs.readFileSync(_config.paths.tmp.root + '/data.json')),
      manageEnv: function(env){
        env.addGlobal('ENV', process.env)
        env.addGlobal('YEAR', new Date().getFullYear())
      }
    }))
    .pipe(_pkg.gulpIf(_option.htmlBeautify,_pkg.lib.htmlBeautify({space_in_empty_paren: true})))
    .pipe(_pkg.gulpIf(_option.minify,_pkg.lib.htmlMin({collapseWhitespace: true})))
    .pipe(_pkg.gulp.dest(dest))
}
module.exports = {
  "revCollector": revCollector,
  "init": init
}

