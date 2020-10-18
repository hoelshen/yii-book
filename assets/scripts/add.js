const utils = require('../scripts/utils')
class Creates{
    constructor(){}
    add(){
        utils.throttle(function(){
          console.log('es6')
        }, 10)
    }
}

export default Creates