const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const session = require("koa-session2");
const Redis = require("ioredis");
const app = new Koa();
const router = new Router();
app.use(router['routes']());
app.use(session({
    key: "SESSIONID",   //default yy"koa:sess"
}));
router.post("/api/login",KoaBody(),function(ctx,next){
  var fields = ctx.request.body;
  var username = fields['username'];
  var password = fields['pwd'];
  var user = {user_id:0,user_name:"root",user_pwd:"123456"};// 查询用户是否存在
  if (!user){
    ctx.body = {"success":false,"err_code":-1,"msg":"用户不存在！"};
  }else if (user.user_pwd != password.toString()) {
    ctx.body = {"success":false,"err_code":-2,"msg":"密码不正确！"};
  }else {
    console.log(ctx.session);
    ctx.cookies.set('user_token',username);
    ctx.body = {"success":true,"err_code":0,"msg":"登录成功！"};
  }

})

app.listen(3000,()=>{console.log("webserver listening on 3000")});
