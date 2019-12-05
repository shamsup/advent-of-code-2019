const fs = require('fs');

module.exports = function readInput(filename) {
  return fs.readFileSync(filename).toString();
};
