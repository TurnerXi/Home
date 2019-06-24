const router = require('koa-router')()

router.post('/login', async (ctx, next) => {
  ctx.session.user = {
    username: 'TurnerXi'
  };
  ctx.body = { msg: 'success' };
})

router.get('/checklogin', async (ctx, next) => {
  ctx.body = { flag: !!ctx.session.user?1:0 };
})

router.get('/logout', async (ctx, next) => {
  ctx.session.user = null
  ctx.body = 'success';
})

module.exports = router
