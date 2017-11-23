import logger from '../../lib/logger'
import DB from '../../lib/db'
import util from '../../lib/util'
import Exception from '../../lib/exception'

let register = async function (ctx, next) {
  let fields = ctx.request.body;
  let username = fields['username'];
  let passowrd = fields['password'];
  let capcha = fields['capcha'];
  let capcha_store = ctx.session['reg_capcha_' + ctx.ip];
  if (capcha.toLowerCase() != capcha_store.toLowerCase()) {
    throw Exception.ERROR_01_0002;
  }
  let info = await new Promise((resolve) => {
    DB.getConnect().then(function (conn) {
      conn.collection("user_info").findOne({
        'username': username
      }, function (err, doc) {
        resolve(1234);
      });
    })
  })
  console.log(info);
  await next();

}

let check_login = async function (ctx, next) {
  await next();
}

let get_captha = async function (ctx, next) {
  let capcha = util.Capcha();
  ctx.session['reg_capcha_' + ctx.ip] = capcha.code;
  ctx.body = capcha.img.getFileData();
  await next();
}

let to_login = async function (ctx, next) {
  let fields = ctx.request.body;
  let user_name = fields['username'];

  if (user_name) {
    logger.info(`用户【${user_name}】登录成功！`);
    ctx.session.user = {
      'uid': new Date().getTime(),
      'name': user_name,
      'wallet': 1000
    };
    ctx.body.flag = 1;
    ctx.body.msg = '登录成功!';
  } else {
    logger.info(`用户【${user_name}】登录失败！`);
    ctx.body.flag = 0;
    ctx.body.msg = '登录失败!';
  }
  await next();
}

let get_info = async function (ctx, next) {
  logger.info(`获取用户【${ctx.user.name}】信息成功！`);
  ctx.body.flag = 1;
  ctx.body.msg = ctx.user;
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
