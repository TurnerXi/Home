const router = require('koa-router')()
const ResourceService = require('../../service/Resource')
const service = new ResourceService()

router.prefix('/resource')

router.get('/init', async (ctx, next) => {
  service.init()
})

router.post('/breadcrumb', async (ctx, next) => {
  console.log(ctx.request.body.path)

  ctx.body = [
    { name: '123222', code: ctx.params['id'], price: 15 },
    { name: '123222', code: ctx.params['id'], price: 15 },
    { name: '123222', code: ctx.params['id'], price: 15 }
  ]
})

module.exports = router
