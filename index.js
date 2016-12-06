var path = require('path')
    , pkg = require('./package.json');

var gridePath = path.join(__dirname, 'src/styl/gride')

exports = module.exports = function (opts) {
  var implicit = (opts && opts.implicit == false) ? false : true;

  return function (style) {
    style.include(__dirname);

    if (implicit) {
      style.import(gridePath);
    }
  }
}

exports.libname = pkg.name;
exports.path = gridePath;
exports.version = pkg.version;