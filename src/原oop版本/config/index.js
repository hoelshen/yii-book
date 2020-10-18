const _ = require('lodash')
const { join } = require('path')

const env = process.env;
// console.log('env: ', env.NODE_ENV);
let config = {
    'viewDir': join(__dirname, "..",'views'),
    'staticDir': join(__dirname, "..",'assets')
}

if(env.NODE_ENV == 'development'){
    const localConfig = {
        port:3000
    }
    config = _.extend(config,localConfig)
    // console.log('config: ', config);

} 
if (env.NODE_ENV == 'production') {
    const prodConfig = {
        port: 80
    }
    config = _.extend(config,prodConfig)

}

module.exports = config;