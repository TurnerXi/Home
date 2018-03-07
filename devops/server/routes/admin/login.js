const router = require('koa-router')()

router.post('/login', async (ctx, next) => {
  ctx.body = {
    message: 'success',
    token: '123456',
    is_supper: 1,
    permissions: [],
    nickname: 'Turner'
  }
})

module.exports = router
