import router from './core/router.js'
import Koa from 'koa';
const app = new Koa();
app.use(router.routes());
app.listen(3000,()=>{console.log("webserver listening on 3000")});
