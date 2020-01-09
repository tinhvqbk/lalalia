'use strict'
const _pkg = require('../package')
//Fork from gulp-json-concat
module.exports = function (fileName, converter) {
  if (!fileName) {
    throw new _pkg.PluginError('lalalia#data', 'Missing fileName option!');
  }    
  if (!converter) {
    throw new _pkg.PluginError('lalalia#data', 'Missing converter option!');
  }
  let data = {};
  let firstFile = null;
  let skipConversion = false;

  function bufferContents(file) {
    
    try {
      _pkg.jsonlint.parse(String(file.contents));
    }
    catch (err) {
      _pkg.log.error('Error on file' + file.path )
      _pkg.log.error(err.message )
      _pkg.log.error('Your JSON file was not generated. Please correct your JSON file.' )
      return false;
    }

    if (!firstFile) {
      firstFile = file;
    }

    if (file.isNull()) {
      return; // ignore
    }
    if (file.isStream()) {
    skipConversion = true;
    return  this.emit('error', new _pkg.PluginError('lalalia#data', 'Streaming not supported'));
    }
    try {

      // Remove subfolders name in the file.relative value
      if (file.relative.indexOf('\\') >= 0) {
        let fileFlat = _pkg.path.parse(file.relative);
        let fileContent = file.contents;

        let file = new _pkg.vinyl({
          cwd: "",
          base: "",
          path: fileFlat.base,
          contents: fileContent
        })
      }

      data[_pkg.path.basename(file.relative, ".json")] = JSON.parse(file.contents.toString());
    } catch (err) {
      skipConversion = true;
      return this.emit('error',
      new _pkg.PluginError('lalalia#data', 'Error parsing JSON: ' + err + ', file: ' + file.path.slice(file.base.length)));
    }
  }
  function endStream() {

    if (firstFile && !skipConversion) {
      let joinedPath = _pkg.path.join(firstFile.base, fileName);
    try {

      let joinedFile = new _pkg.vinyl({
          cwd: firstFile.cwd,
          base: firstFile.base,
          path: joinedPath,
          contents: converter(data)
        });
    this.emit('data', joinedFile);
    }	catch (e) {
        return this.emit('error', new _pkg.PluginError('lalalia#data', e, { showStack: true }));
      }
    }
    this.emit('end');
  }
  return _pkg.through(bufferContents,endStream)
}