import logger from '../../lib/logger'

let to_login = async function(ctx,next){
    let fields = ctx.request.body;
    let user_name = fields['username'];

    if(user_name){
      logger.info(`用户【${user_name}】登录成功！`);
      ctx.session.user = {'uid':new Date().getTime(),'name':user_name,'wallet':1000};
      ctx.body.flag = 1;
      ctx.body.msg = '登录成功!';
    }else{
      logger.info(`用户【${user_name}】登录失败！`);
      ctx.body.flag = 0;
      ctx.body.msg = '登录失败!';
    }
    await next();
}

let get_info = async function(ctx,next){
    logger.info(`获取用户【${ctx.user.name}】信息成功！`);
    ctx.body.flag = 1;
    ctx.body.msg = ctx.user;
}

let routers = [
                {path:'Post /user/login',method:to_login,auth:false},
                {path:'Get /user/info',method:get_info,auth:true},
              ]

export default routers
