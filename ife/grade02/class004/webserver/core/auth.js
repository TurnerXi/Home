import Exception from './exception'
export default{
  checkAuth: async function(ctx,next){
    if(!ctx.session.user){
      throw Exception.ERROR_01_0001
    }
    await next()
  }
}
