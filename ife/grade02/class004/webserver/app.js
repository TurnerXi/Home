import Koa from 'koa';
import session from 'koa-session2'
import bodypaser from 'koa-body'
import router from './lib/router.js'
import filter from './lib/filter.js'
import listener from './lib/listener.js'
import store from './lib/session.js'
import logger from './lib/logger.js'
const app = new Koa();
app.use(bodypaser());
app.use(session({store}));

app.use(async function(ctx,next){
  let begin = new Date().getTime();
  logger.addContext("IP",ctx.ip);
  try{
    logger.addContext("USER",ctx.session.user.name);
  }catch(e){}
  try{
    await next();
  }catch(e){
    logger.error("系统错误：" + JSON.stringify(e));
  }
  let cast = new Date().getTime()-begin;
  logger.info(`request ${ctx.path} cast ${cast} ms`);
})

app.use(filter.resFormat);
app.use(router.routes());
app.listen(3000,listener.start);

app.on('error',function(err){
  logger.error('server error', err);
})
