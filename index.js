var fs         = require('fs');
var data       = readData();
var length     = data.length;

data.forEach(function(item, i) {
  !item && data.splice(i, 1);
});

function readData() {
  return fs.readFileSync('data.txt', 'UTF-8').split('\n')
}

function randomIndex(length) {
    var min = 0;
    var max = length - 1;
    return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports = exports = {
  one: function () {
    return data[randomIndex(length)];
  },
  all: function all() {
    return data.join('\n')
  }
};
