#!/usr/bin/env node --harmony

var program = require('commander');


program.action(function(folder) {
    console.log(folder);
})
.parse(process.argv);