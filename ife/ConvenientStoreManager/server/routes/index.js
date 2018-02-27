const router = require('koa-router')()

router.prefix('/products')

router.get('/', async (ctx, next) => {
  ctx.body = [
    {name:'123222',code:'12323333',price:15},
    {name:'123222',code:'12323333',price:15},
    {name:'123222',code:'12323333',price:15},
    {name:'123222',code:'12323333',price:15}
  ]
})

router.get('/:id', async (ctx, next) => {
  ctx.body = {name:'123222',code:ctx.params['id'],price:15}
})

module.exports = router
