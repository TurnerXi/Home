const router = require('koa-router')()
const exception = require('../lib/exception')
const userService = require('../service/UserService')
const util = require('../lib/util')
const config = require('../config/index')

router.prefix('/login')

router.post('/', async (ctx, next) => {
  let fields = ctx.request.body;
  let { username, password, capcha } = fields;
  let capcha_store = ctx.session['capcha_' + ctx.ip];
  if (capcha.toLowerCase() != capcha_store.toLowerCase()) {
    throw exception.ERROR_01_0002;
  }
  if (username) {
    let entity = await userService.findByUserName(username);
    if (entity == null) {
      throw exception.ERROR_01_0004;
    }
    if (entity.password != password) {
      throw exception.ERROR_01_0006;
    }
    entity.login_ip = ctx.ip;
    entity.login_time = new Date();
    await userService.save(entity);
    ctx.session.user = entity;
    ctx.body.flag = 1;
    ctx.body.msg = { 'token': util.jwt.sign(entity.getInfo(), config.appkey), 'msg': "登录成功！" };
  } else {
    throw exception.ERROR_01_0005;
  }
  await next();
})

router.get('/get_captha', async (ctx, next) => {
  let capcha = util.Capcha();
  ctx.session['capcha_' + ctx.ip] = capcha.code;
  ctx.body = capcha.img.getFileData();
  await next();
})

router.get('/check_login', async (ctx, next) => {
  if (ctx.session.user) {
    ctx.body.flag = 1;
    ctx.body.msg = '用户已登录!';
  } else {
    ctx.body.flag = 0;
    ctx.body.msg = '用户未登录!';
  }
  await next();
})

module.exports = router
