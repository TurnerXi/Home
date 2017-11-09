import Exception from '../core/exception'
var hello_api = async function(ctx,next){
  console.log("helloing");
  var user = ctx.session.user;
  ctx.body = "hello, " + user.name + " !";
}

var login_api = async function(ctx,next){
  console.log("logining");
  var fields = ctx.request.body;
  var username = fields['username'];
  var password = fields['pwd'];
  var user = {user_id:0,user_name:"root",user_pwd:"123456"};// 查询用户是否存在
  if (!user){
    ctx.body = "用户不存在！";
  }else if (user.user_pwd != password.toString()) {
    ctx.body = "密码不正确！";
  }else {
    ctx.session.user = {"id": 1, "name": "root"};
    ctx.body = "登录成功！";
  }
}

var routers = [
                {path:'Get /hello',method:hello_api,auth:true},
                {path:'Post /login',method:login_api}
              ]

export default routers
