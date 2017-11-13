import Exception from '../../lib/exception'
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
  ctx.session.user = {"id": 1, "name": username};
  ctx.body = "登录成功！";
}

var routers = [
                {path:'Get /hello',method:hello_api,auth:true},
                {path:'Post /login',method:login_api}
              ]

export default routers
