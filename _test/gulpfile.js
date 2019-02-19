const { series, parallel } = require('gulp'),
  del = require('del'),
  dotenv = require('dotenv'),
  hcjlab = require('@hcjlab/core')
let path = process.env.APP_ENV ? '.env.' + process.env.APP_ENV : '.env'
const configs = hcjlab.getConfigs()

console.log(`CONFIG: ${path}`)
dotenv.config({ path })

function clean() {
  return Promise.resolve(del([
    configs.paths.tmp.root,
    configs.paths.root + '/rev',
    configs.paths.dest.root
  ], { force: true }))
}

function clean_build() {
  return Promise.resolve(del([
    configs.paths.tmp.root,
    configs.paths.root + '/rev'
  ], { force: true }))
}

function start() {
  return Promise.resolve(hcjlab(configs))
}

function build() {
  return Promise.resolve(hcjlab(configs, {
    minify: true,
    serve: false,
    hash: true
  }))
}
exports.clean = clean
exports.clean_build = clean_build
exports.build = series(clean, build)
exports.default = series(clean, start)

