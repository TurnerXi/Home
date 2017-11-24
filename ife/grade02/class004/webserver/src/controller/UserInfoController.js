import logger from '../../lib/logger'
import util from '../../lib/util'
import Exception from '../../lib/exception'
import UserInfoService from '../service/UserInfoService'
import UserInfoDto from '../dto/UserInfoDto'
let register = async function (ctx, next) {
  let fields = ctx.request.body;
  let username = fields['username'];
  let password = fields['password'];
  let capcha = fields['capcha'];
  let capcha_store = ctx.session['capcha_' + ctx.ip];
  if (capcha.toLowerCase() != capcha_store.toLowerCase()) {
    throw Exception.ERROR_01_0002;
  }
  let info = await UserInfoService.findByUserName(username);
  if(info != null){
    throw Exception.ERROR_01_0003;
  }
  await UserInfoService.save(new UserInfoDto({username,password,reg_ip:ctx.ip,reg_time:new Date(),status:1}).getEntity());
  logger.info(`用户【${username}】注册成功，注册地址${ctx.ip}！`);
  ctx.body.flag = 1;
  ctx.body.msg = '用户注册成功!';
  await next();
}

let check_login = async function (ctx, next) {
  await next();
}

let get_captha = async function (ctx, next) {
  let capcha = util.Capcha();
  ctx.session['capcha_' + ctx.ip] = capcha.code;
  ctx.body = capcha.img.getFileData();
  await next();
}

let to_login = async function (ctx, next) {
  let fields = ctx.request.body;
  let username = fields['username'];
  let password = fields['password'];
  let capcha = fields['capcha'];
  let capcha_store = ctx.session['capcha_' + ctx.ip];
  if (capcha.toLowerCase() != capcha_store.toLowerCase()) {
    throw Exception.ERROR_01_0002;
  }
  if (username) {
    let dto = await UserInfoService.findByUserName(username);
    dto.login_ip = ctx.ip;
    dto.login_time = new Date();
    if(dto == null){
      throw Exception.ERROR_01_0004;
    }
    if(dto.password != password){
      throw Exception.ERROR_01_0006;
    }
    await UserInfoService.save(dto.getEntity());
    ctx.session.user = dto;
    ctx.body.flag = 1;
    ctx.body.msg = '登录成功!';
  } else {
    throw Exception.ERROR_01_0005;
  }
  await next();
}

let get_info = async function (ctx, next) {
  let dto = await UserInfoService.get(ctx.session.user.userid);
  ctx.body.flag = 1;
  ctx.body.msg = dto.getInfo();
  await next();
}

let routers = [{
    path: 'Post /user/login',
    method: to_login,
    auth: false
  },
  {
    path: 'Get /user/info',
    method: get_info,
    auth: true
  },
  {
    path: 'Get /user/check_login',
    method: check_login,
    auth: false
  },
  {
    path: 'Get /user/get_captha',
    method: get_captha,
    auth: false
  },
  {
    path: 'Post /user/register',
    method: register,
    auth: false
  },
]

export default routers
