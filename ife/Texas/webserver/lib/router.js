import Router from 'koa-router'
import auth from './auth'
import logger from './logger'
import fs from 'fs'
import path from 'path'
let router = new Router();
let root = path.resolve(__dirname, '../src/controller');

let routers = fileDisplay(root);

function fileDisplay(p,r = []){
  fs.readdirSync(p).forEach(function(item){
    let realPath = path.resolve(p,item);
    if(fs.statSync(realPath).isDirectory()){
      r = fileDisplay(realPath,r);
    }else{
      try{
        r = r.concat(require(realPath).default.map(function(o){
            o.file = realPath.replace(root,"");
            return o;
          })
        );
      }catch(e){
        logger.error(e.message);
      }
    }
  });
  return r;
}

routers.forEach(function(item){
  logger.info( `mapping Url ${item.path} to Method ${item.method.name} in File ${item.file}`);
});

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
