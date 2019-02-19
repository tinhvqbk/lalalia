'use strict'
const _pkg = require('../package')
function copy(_config,_option){
  return new Promise(res => {
    _pkg.gulp.src([
    _config.paths.src.assets + '/**/*.+(png|jpg|jpeg|gif|svg)',
    '!'+ _config.paths.src.svg,
    '!'+ _config.paths.src.svg + '/**/**',
    ])
    .pipe(_pkg.gulp.dest(_config.paths.dest.assets))
    .on('end', res)
  })
}
function copy_nohash(_config,_option){
  return _pkg.mergeStream(
  _pkg.gulp.src([_config.paths.src.animation + '/**/*'])
    .pipe(_pkg.gulpIf('*.html',_pkg.lib.htmlMin({collapseWhitespace: true})))
    .pipe(_pkg.gulpIf('*.html',_pkg.lib.jsInlineMin()))
    .pipe(_pkg.gulpIf('*.js',_pkg.lib.jsMin()))
    .pipe(_pkg.gulp.dest(_config.paths.dest.animation)),

  _pkg.gulp.src([
    _config.paths.src.otherassets + '/**/*'
  ])
  .pipe(_pkg.gulpIf('*.html',_pkg.lib.htmlMin({collapseWhitespace: true})))
  .pipe(_pkg.gulpIf('*.html',_pkg.lib.jsInlineMin()))
  .pipe(_pkg.gulpIf('*.js',_pkg.lib.jsMin()))
  .pipe(_pkg.gulp.dest(_config.paths.dest.otherassets))
  )
}
function hash(_config,_option){
  return new Promise(res => {
      _pkg.gulp.src([
        _config.paths.src.assets + '/**/*',
        '!'+_config.paths.src.animation + '/**/*',
        '!'+_config.paths.src.svg + '/**/*',
        '!'+_config.paths.src.otherassets + '/**/*'
        ])
        .pipe(_pkg.rev())
        .pipe(_pkg.lib.revURL())
        .pipe(_pkg.gulpIf('*.js',_pkg.lib.jsMin()))
        .pipe(_pkg.gulp.dest(_config.paths.dest.assets))
        .pipe(_pkg.rev.manifest('assets.json',{merge: true }))
        .pipe(_pkg.gulp.dest(_config.paths.root + '/rev'))
        .on('end', res)
      })
}
function rev(_config,_option){
  return new Promise(res => {
    _pkg.gulp.src([
      _config.paths.root + 'rev/**/*.json',
      _config.paths.tmp.root + '/**/*.html'
    ])
    .pipe(_pkg.revCollector({ replaceReved: true }))
    .pipe(_pkg.gulp.dest(_config.paths.dest.root))
    .on('end',res)
  })
}
module.exports = {
  "copy": copy,
  "copy_nohash": copy_nohash,
  "hash": hash,
  "rev": rev
}