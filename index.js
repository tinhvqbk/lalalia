'use strict'
const _pkg = require('./package')
const load = require('./load')
let defaultConfig = require('./config.json')
let defaultOptions = {
  serve: true,
  minify: false,
  htmlBeautify: true,
  htmlOptimize: false,
  cssOptimize: false,
  jsOptimize: false,
  hash: false
}
const lalalia = (configs,options) => {
  configs = _pkg._.defaultsDeep(configs || {}, defaultConfig);
  options = _pkg._.defaultsDeep(options || {}, defaultOptions);
  return _pkg.through2.obj(load(configs,options))
}
lalalia.getConfigs = function (configs) {
  return  configs = _pkg._.defaultsDeep(configs || {}, defaultConfig);
}
module.exports = lalalia