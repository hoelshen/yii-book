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
            ctx.body = `<iframe src="https://api.isoyu.com/gy/" frameborder="0" scrolling="no" width="300" height="300"></iframe>`
        });
    }
}




module.exports = errorHandler