const koa = require('koa')

const app = new koa();

const serve = require('koa-static');

const render = require('koa-swig');


const co = require('co');

const log4js = require('log4js');

const config = require('./config/index')

const errorHandler = require('./middleware/errorHandler')

log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'logs/cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');

errorHandler.error(app, logger)

logger.level = 'debug'
logger.debug('some debug message')


app.use(serve(config.staticDir));
//初始化所有的路由
require('./controllers')(app)
app.context.render = co.wrap(render({
    // ...your setting
    root: config.viewDir,
    autoescape: true,
    //ssr 渲染的性能的瓶颈
    cache: 'memory', // disable, set to false
    ext: 'html',
    varControls:["[[", "]]"],//更改数据模版本来样式
    writeBody: false
}));

// app.use(route)

console.log('config.port: ', config);
app.listen(config.port, ()=>{
    console.log('项目启动中...')
})