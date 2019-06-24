// import jwt from 'jsonwebtoken'
// import config from '../../config/index.js'
import logger from '../../lib/logger'
import util from '../../lib/util'
import Exception from '../../lib/exception'
import UserInfoService from '../service/UserInfoService'
import UserInfoDto from '../dto/UserInfoDto'

export default [{
    path: 'Post /api/user/login',
    auth: false,
    method: async function (ctx, next) {
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
        if (dto == null) {
          throw Exception.ERROR_01_0004;
        }
        if (dto.password != password) {
          throw Exception.ERROR_01_0006;
        }
        dto.login_ip = ctx.ip;
        dto.login_time = new Date();
        await UserInfoService.save(dto.getEntity());
        ctx.session.user = dto;
        ctx.body.flag = 1;
        // ctx.body.msg = {'token':jwt.sign(dto, config.appkey, { expiresInMinutes: 60*5 }), 'msg':"登录成功！"};
      } else {
        throw Exception.ERROR_01_0005;
      }
      await next();
    }

  },
  {
    path: 'Get /api/user/info',
    auth: true,
    method: async function (ctx, next) {
      let dto = await UserInfoService.get(ctx.session.user.userid);
      ctx.body.flag = 1;
      ctx.body.msg = dto.getInfo();
      await next();
    }

  },
  {
    path: 'Get /api/user/check_login',
    auth: false,
    method: async function (ctx, next) {
      if (ctx.session.user) {
        ctx.body.flag = 1;
        ctx.body.msg = '用户已登录!';
      } else {
        ctx.body.flag = 0;
        ctx.body.msg = '用户未登录!';
      }
      await next();
    }

  },
  {
    path: 'Get /api/user/get_captha',
    auth: false,
    method: async function (ctx, next) {
      let capcha = util.Capcha();
      ctx.session['capcha_' + ctx.ip] = capcha.code;
      ctx.body = capcha.img.getFileData();
      await next();
    }

  },
  {
    path: 'Post /api/user/register',
    auth: false,
    method: async function (ctx, next) {
      let fields = ctx.request.body;
      let username = fields['username'];
      let password = fields['password'];
      let capcha = fields['capcha'];
      let capcha_store = ctx.session['capcha_' + ctx.ip];
      if (capcha.toLowerCase() != capcha_store.toLowerCase()) {
        throw Exception.ERROR_01_0002;
      }
      let info = await UserInfoService.findByUserName(username);
      if (info != null) {
        throw Exception.ERROR_01_0003;
      }
      await UserInfoService.save(new UserInfoDto({ username, password, reg_ip: ctx.ip, reg_time: new Date(), status: 1 }).getEntity());
      logger.info(`用户【${username}】注册成功，注册地址${ctx.ip}！`);
      ctx.body.flag = 1;
      ctx.body.msg = '用户注册成功!';
      await next();
    }
  },
]
