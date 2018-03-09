const router = require('koa-router')()

router.prefix('/products')

router.get('/', async (ctx, next) => {
    ctx.body = ctx.session.user
})

module.exports = router
