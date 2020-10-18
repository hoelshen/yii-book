const { merge } = require("lodash");

const argv = require("yargs-parser")(process.argv.slice(2)); 
console.log('argv: ', argv);
const _mode = argv.mode || "development";

const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require("webpack-merge");
const glob = require("glob");

const files  = glob.sync("./src/web/vview/**/*.entry.js")
console.log('files: ', files);


let _entry = {
  
}
let webpackConofig = {
  entry: _entry
}


console.log("🍎", _mergeConfig)
module.exports = merge(webpackConofig, _mergeConfig)



