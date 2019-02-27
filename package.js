'use strict'
module.exports = {
  "_": require('lodash'),
  "path": require('path'),
  "vinyl": require('vinyl'),
  "crc": require('crc'),
  "fs": require('fs'),
  "fsEx": require('fs-extra'),
  "log": require('fancy-log'),
  "replaceExtension": require('replace-ext'),
  "PluginError": require('plugin-error'),
  "colors": require('ansi-colors'),
  "browser": require('browser-sync'),
  "chokidar": require('chokidar'),
  "through2": require('through2'),
  "through": require('through'),
  "nunjucks": require('nunjucks'),
  "webpack": require('webpack'),
  "webpackStream": require('webpack-stream'),
  "jsonlint": require('@hcjlab/jsonlint'),
  "postcssImport": require('postcss-import'),
  "cssnano": require('cssnano'),
  "htmlMin": require('html-minifier'),
  "decomment": require('decomment'),
  "uglifyJS": require('uglify-js'),
  "autoprefixer": require('autoprefixer'),
  "beautify": require('js-beautify'),
  "crypto": require('crypto'),
  //Gulp
  "gulp": require('gulp'),
  "gulpPostcss": require('gulp-postcss'),
  "gulpSass": require('gulp-sass'),
  "gulpIf": require('gulp-if'),
  "gulpBabel": require('gulp-babel'),
  //Build hash
  "rev": require('gulp-rev'),
  "revCollector": require('gulp-rev-collector')
}
module.exports.lib = {
  "nunjuck": require('./lib/nunjuck'),
  "revURL": require('./lib/rev-url'),
  "mergeJson": require('./lib/merge-json'),
  "htmlMin": require('./lib/html-min'),
  "htmlBeautify": require('./lib/html-beautify'),
  "jsInlineMin": require('./lib/js-inline-min'),
  "jsMin": require('./lib/js-min'),
  "fileSync": require('./lib/file-sync')
}