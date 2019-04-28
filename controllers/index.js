const Router = require('koa-router');
const router = new Router();


const IndexController = require('./indexController')
// console.log('IndexController: ', IndexController);


const indexController = new IndexController();


// router.get('/', (ctx, next) => {
//     console.log('ctx: ', ctx);
//     // ctx.router available
// });
// console.log(indexController.actionIndex())
console.log('🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎')


router.get('/', indexController.actionIndex())
router.get('/index', indexController.actionIndex())
router.get('/add', indexController.addIndex())
router.get('/', indexController.actionIndex())


module.exports = app => {
    app
        .use(router.routes())
        .use(router.allowedMethods());

}