const SafeRequest = require('../utils/SafeRequest');
const mongodb = require("../mongo.js")

/**
 * 创建获取首页数据类
 */
class Index {

  constructor(app){
    this.app = app;

  }

  getData(options){
    const safeRequest = new SafeRequest('books/index');
    return safeRequest.fetch({})
  }
  /**
   * 
   * @param {options} params 
   */

  addDate(params){
    const safeRequest = new SafeRequest('books/create');
    return safeRequest.fetch({
      method: "post",
      params: options.parmas
    })
  }
}

module.exports = Index;







