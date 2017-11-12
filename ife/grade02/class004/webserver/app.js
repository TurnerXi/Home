import Koa from 'koa';
import session from 'koa-session2'
import bodypaser from 'koa-body'
import router from './core/router.js'
import filter from './core/filter.js'
import listener from './core/listener.js'
import store from './core/session.js'
import logger from './core/logger.js'
const app = new Koa();
app.use(bodypaser());
app.use(session({store}));

app.use(async function(ctx,next){
  logger.debug(ctx,"begin....");
  await next();
})
app.use(filter.main);
app.use(filter.resFormat);
app.use(router.routes());
app.listen(3000,listener.start);

app.on('error',function(){
  console.error('server error', err);
})
