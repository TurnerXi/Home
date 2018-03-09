const router = require('koa-router')()

router.post('/login', async (ctx, next) => {
  ctx.session.user = {
    username: 'TurnerXi'
  };
  ctx.body = { msg: 'success' };
})

router.post('/checklogin', async (ctx, next) => {
  ctx.body = { flag: !!ctx.session.user };
})

module.exports = router
