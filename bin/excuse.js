#! /usr/bin/env node

var colors = require('colors');
var cp = require('copy-paste');
var excuse = require('../index');

var args = process.argv[2];
var output;

if (args === 'all') {
  output = excuse.all();
}
else {
  output = excuse.one();
  cp.copy(output);
}

console.log(colors.yellow(output));
