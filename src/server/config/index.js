import  {extend}  from 'lodash'
import  { join }  from 'path'

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
    config = extend(config,localConfig)

} 
if(false){
  console.log('🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎')
}
if (env.NODE_ENV == 'production') {
    const prodConfig = {
        port: 80
    }
    config = extend(config,prodConfig)

}

module.exports = config;