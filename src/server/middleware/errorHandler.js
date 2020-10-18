const errorHandler = {
    error (app, logger) {
        app.use(async (ctx, next) => {
            try{
                await next();

            }catch(err){
                logger.error(err)
                ctx.status = 500;
                ctx.body = "😢";
            }
        });


        app.use(async (ctx, next) => {
            await next();
            if (404 !== ctx.status) {
                return
            }
            //很多项目即使出现了 404 请求 header 200
            ctx.status = 200;
            ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>`
        });
    }
}




module.exports = errorHandler