import Router from 'koa-router'
const router = new Router({prefix: '/users'});

router.get('/', async function (ctx, next) {
  ctx.body = 'this is a users response!';
});

router.get('/bar', async function (ctx, next) {
  ctx.body = 'this is a users/bar response!';
});

export default router
