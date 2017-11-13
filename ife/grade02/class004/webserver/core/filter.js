import logger from './logger.js'
export default {
    resFormat: async function(ctx,next){
      try{
        await next()
        if(ctx.body){
          ctx.body = {'code': 1,'msg': ctx.body}
        }else{
          ctx.body = {'code': 0,  'msg': {}}
        }
      }catch(e){
        ctx.body = {'code': e.code,'msg': "接口请求错误：" + e.msg}
        throw e
      }
    }
}
