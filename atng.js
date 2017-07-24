#!/usr/bin/env node --harmony

const pkg = require('./package.json');
const program = require('commander');
const _ = require('lodash');
const exec = require('child_process').exec;

program
    .version(pkg.version)
    .command('mkdir <folder>')
    .option('-p, --prefix [prefix]', 'App prefix for namespacing', 'app')
    .action(function (folder, options) {
       // console.log(folder, _.kebabCase(folder), _.upperFirst(_.camelCase(folder)));
        exec(`ng new ${_.kebabCase(folder)} -p=${options.prefix} -si=true --style=sass --routing=true`, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                process.exit(1);
            }
            if(stderr){
                console.log(`stderr: ${stderr}`);
                 process.exit(1);
            }
            console.log(`${stdout}`);
        });
    })


program.parse(process.argv);