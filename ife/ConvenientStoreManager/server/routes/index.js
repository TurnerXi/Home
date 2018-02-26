const router = require('koa-router')()

router.prefix('/product')

router.get('/', async (ctx, next) => {
  ctx.body = [
    {name:'123222',code:'12323333',price:15},
    {name:'123222',code:'12323333',price:15},
    {name:'123222',code:'12323333',price:15},
    {name:'123222',code:'12323333',price:15}
  ]
})

router.get('/:id', async (ctx, next) => {
  ctx.body = {
    id: ctx.params['id'],
    name: 'product'
  }
})

module.exports = router
