const router = require('koa-router')()

router.prefix('/products')

router.get('/', async (ctx, next) => {
  ctx.body = [
    { name: '123222', code: ctx.params['id'], price: 15 },
    { name: '123222', code: ctx.params['id'], price: 15 },
    { name: '123222', code: ctx.params['id'], price: 15 }
  ]
})

module.exports = router
