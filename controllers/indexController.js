/* 
首页indexController
*/
class IndexController{
    constructor(){}
    actionIndex(){
        // return console.log('🍊🍊🍊🍊🍊🍊🍊')
       return  async (ctx, next) => {
                // console.log('ctx: ', ctx, ctx.body);
                ctx.body = await ctx.render('index',{
                    data: 'sjh'
                })
            };
    }
    addIndex(){
        return async (ctx, next)=>{
           ctx.body = ctx.render('add')
       } 
    }
}

module.exports = IndexController