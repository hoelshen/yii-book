/* 
首页indexController
*/
const Index = require("../models/index");
const index = new  Index();
const { URLSearchParams } = require("url");
const mongo = require("../mongo.js")

class IndexController{
    constructor(){}
    actionIndex(){
       return  async (ctx, next) => {
                // const result = await index.getData();
                const result = await mongo.find();
                console.log('result: ', result);

                ctx.body = await ctx.render('index',{
                  data: result
                })
                // console.log('ctx: ', ctx, ctx.body);

            };
    }
    addIndex(){
        return async (ctx, next)=>{

          const parmas = new URLSearchParams();

          parmas.append("Books[name]", "测试")
          parmas.append("Books[author]", "数据")
          const result = await index.addData({
            parmas
          });

          ctx.body = result
       } 
    }
}

module.exports = IndexController