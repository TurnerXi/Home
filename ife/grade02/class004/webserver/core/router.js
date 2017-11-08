import Router from 'koa-router'
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

console.log(routers);

routers.forEach(function(item){
  if(item.path.indexOf("Post") != 0 ){
    router.get(item.path,item.method);
  }
});

export default router
