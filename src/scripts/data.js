'use strict'
const _pkg = require('../package')
function init(_config){
  return new Promise(res => {
    _pkg.gulp.src(_config.paths.src.data + '/*.json')
    .pipe(_pkg.lib.mergeJson('data.json',function(data){
      return new Buffer.from(JSON.stringify(data))
    }))
    .pipe(_pkg.gulp.dest(_config.paths.tmp.root))
    .on('end', res);
  })
}
module.exports = {
  "init": init
}

