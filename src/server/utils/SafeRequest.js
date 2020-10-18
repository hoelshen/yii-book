const fetch = require("node-fetch")
const config = require("../config")

class SafeRequest {
    constructor(url){
      this.url = url;
      this.baseUrl = config.baseUrl
    }

    fetch(options){
      let request = fetch(this.baseUrl + this.url);
      if(options){
        request = fetch(this.baseUrl + this.url,{
          method: options.method,
          body: options.parmas
        })
      }
      return new Promise((reslove, reject)=>{
        let result = {
          code: 0,
          message : "",
          data: []
        };

        request.then(res => {
          let _json  = {};
          try {
            _json =  res.json()
          } catch (err){
            // 发邮件
          }
        })
        .then((json)=> {
          result.code = 200;
          result.data = json;
          reslove(result)
        })
        .catch(err=> {
          result.code = 1;
          result.message = "node fetch";
          reject(err)
        })
      })
    }
}

module.exports = SafeRequest