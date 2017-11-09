import Router from 'koa-router'
import auth from './auth'
import logger from './logger.js'
import fs from 'fs'
import path from 'path'
let router = new Router();
let root = path.resolve(__dirname, '../controller');

let routers = (function(files){
    let r = [];
    files.forEach(function(item){
      r = r.concat(require(path.resolve(root,item)).default);
    })
    return r;
})(fs.readdirSync(root))

logger.info(routers);

routers.forEach(function(item){
  let methods = [item.method];
  if(item.auth){
    methods.unshift(auth.checkAuth);
  }
  if(item.path.indexOf("Get ") == 0 ){
    router.get(item.path.replace("Get ",""),...methods);
  }else if(item.path.indexOf("Post ") == 0 ){
    router.post(item.path.replace("Post ",""),...methods);
  }
});

export default router
