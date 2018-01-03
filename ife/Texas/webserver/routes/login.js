const router = require('koa-router')()
const exception = require('../lib/exception')
const userService = require('../service/UserService')
const util = require('../lib/util')

router.prefix('/login')

router.post('/', async (ctx, next) => {
  let fields = ctx.request.body;
  // let {username,password,capcha} = fields;
  let username = fields['username'],
    password = fields['password'],
    capcha = fields['capcha'];
  let capcha_store = ctx.session['capcha_' + ctx.ip];
  if (capcha.toLowerCase() != capcha_store.toLowerCase()) {
    throw exception.ERROR_01_0002;
  }
  if (username) {
    let dto = await userService.findByUserName(username);
    if (dto == null) {
      throw exception.ERROR_01_0004;
    }
    if (dto.password != password) {
      throw exception.ERROR_01_0006;
    }
    dto.login_ip = ctx.ip;
    dto.login_time = new Date();
    await userService.save(dto.getEntity());
    ctx.session.user = dto;
    ctx.body.flag = 1;
    // ctx.body.msg = {'token':jwt.sign(dto, config.appkey, { expiresInMinutes: 60*5 }), 'msg':"登录成功！"};
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

router.get('/json', async (ctx, next) => {
  ctx.body.flag = 1;
  ctx.body.msg = {
    title: 'koa2 json'
  }
})

module.exports = router
