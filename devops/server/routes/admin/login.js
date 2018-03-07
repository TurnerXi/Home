const router = require('koa-router')()

router.post('/login', async (ctx, next) => {
  ctx.body = {message: 'success'}
})

module.exports = router
