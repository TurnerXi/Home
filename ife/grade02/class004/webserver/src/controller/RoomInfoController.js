import logger from '../../lib/logger'
import exception from '../../lib/exception'

let create_room = async function(ctx,next){
  global.room = {"players":1,"isbegin":false};
  logger.info("房间创建成功！");
  ctx.body.flag = 1;
  ctx.body.msg = global.room;
  await next();
}

let join_room = async function(ctx,next){
  if(!global.room){
      throw exception.ERROR_02_0001
  }else{
    if(++global.room.players == 4){
      global.room.isbegin = true;
    }
    ctx.body.flag = 1;
    ctx.body.msg = global.room;
  }
  await next();
}

let has_room = async function(ctx,next){
  if(global.room){
    ctx.body.flag = 1;
    ctx.body.msg = "成功！";
  }else{
    ctx.body.flag = 0;
    ctx.body.msg = "失败！";
  }
  await next();
}

let destory_room = async function(ctx,next){
  global.room = null;
  ctx.body.flag = 1;
  ctx.body.msg = "成功！";
  await next();
}

let routers = [
  {path:'Get /room/create',method:create_room,auth:true},
  {path:'Get /room/hasroom',method:has_room,auth:true},
  {path:'Get /room/join',method:join_room,auth:true},
  {path:'Get /room/destroy',method:destory_room,auth:true},
]

export default routers
