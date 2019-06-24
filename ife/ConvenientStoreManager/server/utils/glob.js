const glob = require('glob')
const path = require('path')

exports.getEntries = function (pattern){
  return glob.sync(pattern).map(function (entry) {
    return path.basename(entry, path.extname(entry));
  });
}
