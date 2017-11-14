import logger from '../../lib/logger'

var begin_game = async function(ctx,next){
  if(ctx.session.room && ctx.session.room.isbegin){
    ctx.body.flag = 1;
    ctx.body.msg = "开始游戏！";
    global.game = {'pool':0, 'round': 0 };
  }else{
    ctx.body.flag = 0;
    ctx.body.msg = "游戏无法开始！";
  }
  await next();
}

var invest = async function(ctx,next){
  var req = ctx.params;
  logger.info(req.money);
  await next();
}

var routers = [
  {path:'Get /game/invest/:money',method:invest}
]

export default routers
