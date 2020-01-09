'use strict'
const _pkg = require('./package')
const _data = require('./scripts/data')
const _assets = require('./scripts/assets')
const _sass = require('./scripts/style')
const _script = require('./scripts/script')
const _html = require('./scripts/html')
const _browser = require('./scripts/browser')


module.exports = async function (configs, options) {
  _pkg.log.info('[' + _pkg.colors.blue('Copy') + '] Root file')
  _assets.copy_rootFile(configs)
  _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] CSS')
  await _sass.init(configs, options)
  _pkg.log.info('[' + _pkg.colors.green('Compiled') + '] CSS')

  _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] Javascript')
  await _script.init(configs, options)
  _pkg.log.info('[' + _pkg.colors.green('Compiled') + '] Javascript')


  if (options.hash) {
    _pkg.log.info('[' + _pkg.colors.blue('Hash') + '] Assets')
    await _assets.copy_nohash(configs, options)
    await _assets.hash(configs, options)
    _pkg.log.info('[' + _pkg.colors.green('Hashed') + '] Assets')
  } else {
    _pkg.log.info('[' + _pkg.colors.blue('Copy') + '] Assets')
    await _assets.copy(configs)
    _pkg.log.info('[' + _pkg.colors.green('Copied') + '] Assets')
  }

  _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] Data JSON')
  await _data.init(configs)
  _pkg.log.info('[' + _pkg.colors.green('Compiled') + '] Data JSON ')

  _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] HTML')
  await _html.init(configs, options)
  _pkg.log.info('[' + _pkg.colors.green('Compileted') + '] HTML')
  if (options.hash) {
    _pkg.log.info('[' + _pkg.colors.blue('Revision') + '] Assets')
    await _assets.rev(configs, options)
    _pkg.log.info('[' + _pkg.colors.green('Revisioned') + '] Assets')
  }
  if (options.sitemap) {
    _pkg.log.info('[' + _pkg.colors.blue('Generating') + '] Sitemap')
    await _assets.sitemap(configs, options)
    _pkg.log.info('[' + _pkg.colors.green('Generated') + '] Sitemap')
  }

  if (options.serve) {
    _browser.init(configs, options)
  }
}

