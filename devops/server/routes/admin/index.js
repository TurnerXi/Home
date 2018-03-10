const router = require('koa-router')()

router.prefix('/products')

router.get('/', async (ctx, next) => {
  if (ctx.session.user) {
    ctx.body = ctx.session.user
  } else {
    ctx.status = 403
    ctx.message = "No Auth"
  }
})

module.exports = router
