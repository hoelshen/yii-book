const Router = require('koa-router');
const router = new Router();
const IndexController = require('./indexController')
const indexController = new IndexController();

router.get('/', indexController.actionIndex())
router.get('/index', indexController.actionIndex())
router.get('/add', indexController.addIndex())


module.exports = app => {
    app
        .use(router.routes())
        .use(router.allowedMethods());

}