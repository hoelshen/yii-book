/* 
首页indexController
*/

class IndexController{
    constructor({indexService}){
      this.indexService = indexService
    }
    actionIndex(){
       return  async (ctx, next) => {
                const result = this.indexService.getData()
                ctx.body = await ctx.render('index',{
                  data: result
                })
  

            };
    }
    addIndex(){
        return async (ctx, next)=>{

          ctx.body =  await ctx.render('add',{
            data: result
          })
       } 
    }
}

module.exports = IndexController