import Exception from './exception'
export default{
  checkAuth: async function(ctx,next){
    if(!ctx.session.user){
      throw Exception.ERROR_01_0001
    }else{
      ctx.user = ctx.session.user;
    }
    await next()
  }
}
