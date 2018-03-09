const router = require('koa-router')()

router.prefix('/products')

router.get('/', async (ctx, next) => {
  console.log(ctx.cookies)
    console.log(ctx.session.views);
    let n = ctx.session.views || 0;
    ctx.session.views = ++n;

    ctx.body = {'sess':n + ' views'};
})

module.exports = router
