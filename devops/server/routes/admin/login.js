const router = require('koa-router')()

router.post('/login', async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;

  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  console.log(ctx.session.views);
  ctx.body = {'sess':n + ' views'};
})

module.exports = router
