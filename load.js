'use strict'
const _pkg = require('./package')
const _data = require('./scripts/data')
const _assets = require('./scripts/assets')
const _sass = require('./scripts/style')
const _script = require('./scripts/script')
const _html = require('./scripts/html')
const _browser = require('./scripts/browser')

module.exports = function (configs, options) {
  _pkg.log.info('[' + _pkg.colors.blue('Copy') + '] Root file')
  _assets.copy_rootFile(configs)
  if (!options.hash) {
    _pkg.log.info('[' + _pkg.colors.blue('Copy') + '] Assets')
    _assets.copy(configs)
      .then(() => {
        _pkg.log.info('[' + _pkg.colors.green('Copied') + '] Assets')
      })
  }
  _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] CSS')
  _sass.init(configs, options)
    .then(() => {
      _pkg.log.info('[' + _pkg.colors.green('Compiled') + '] CSS')
      _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] Javascript')
      _script.init(configs, options)
        .then(() => {
          _pkg.log.info('[' + _pkg.colors.green('Compiled') + '] Javascript')
          if (options.hash) {
            _pkg.log.info('[' + _pkg.colors.blue('Hash') + '] Assets')
            _assets.copy_nohash(configs, options)
            _assets.hash(configs, options)
              .then(() => {
                _pkg.log.info('[' + _pkg.colors.green('Hashed') + '] Assets')
                _pkg.log.info('[' + _pkg.colors.blue('Revision') + '] Assets')
                _assets.rev(configs, options)
              })
              .then(() => {
                _pkg.log.info('[' + _pkg.colors.green('Revisioned') + '] Assets')
              })
          }
        })
    })
  _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] Data JSON')
  _data.init(configs)
    .then(() => {
      _pkg.log.info('[' + _pkg.colors.green('Compiled') + '] Data JSON ')
      _pkg.log.info('[' + _pkg.colors.blue('Compile') + '] HTML')
      _html.init(configs, options).then(() => {
        _pkg.log.info('[' + _pkg.colors.green('Compileted') + '] HTML')
        if (options.serve) {
          _browser.init(configs, options)
        }
      })
    })
    .catch((err) => {
      _pkg.log.info('[' + _pkg.colors.red('Error') + '] ' + err)
    })

}

