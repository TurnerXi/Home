import Router from 'koa-router'
const router = new Router({prefix: '/index'});
router.get('/', async function (ctx, next) {
  console.log('1234');
});

router.get('/foo', async function (ctx, next) {
  console.log('2345');
});

export default router
