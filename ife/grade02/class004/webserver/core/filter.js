import logger from './logger.js'
export default {
    main: async function(ctx,next){
      let begin = new Date().getTime();
      try{
        await next();
      }catch(e){
        logger.error("系统错误：" + JSON.stringify(e));
      }
      let cast = new Date().getTime()-begin;
      logger.info(`request ${ctx.path} cast ${cast} ms`);
    },
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
