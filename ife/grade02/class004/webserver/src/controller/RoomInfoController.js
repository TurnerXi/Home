import logger from '../../lib/logger'
import util from '../../lib/util'
import Exception from '../../lib/exception'
import RoomService from '../service/RoomService'
import RoomDto from '../dto/RoomInfoDto'

export default [{
    path: 'Get /api/room/create',
    auth: true,
    method: async function (ctx, next) {
      let room = await RoomService.create(ctx.session.user.userid);
      logger.info(`房间${room.room_num}创建成功！`);
      ctx.body.flag = 1;
      ctx.body.msg = room;
      await next();
    }
  },
  {
    path: 'Get /api/room/list',
    auth: true,
    method: async function (ctx, next) {
      ctx.body.flag = 1;
      ctx.body.msg = await RoomService.rooms();
      await next();
    }
  },
  {
    path: 'Get /api/room/join/:room_num',
    auth: true,
    method: async function (ctx, next) {
      let room_num = ctx.params.room_num;
      let play_id = ctx.session.user.id;
      let flag = await RoomService.join(room_num, play_id);
      ctx.body.flag = flag;
      if (flag == 1) {
        ctx.body.msg = `用户${play_id}加入房间${room_num}成功!`;
      } else if (flag == -1) {
        ctx.body.msg = `房间${room_num}已开局，用户${play_id}加入失败!`;
      } else if (flag == -2) {
        ctx.body.msg = `房间${room_num}已满员，用户${play_id}加入失败!`;
      } else {
        ctx.body.msg = `用户${play_id}加入房间${room_num}失败!`;
      }
      await next();
    }
  }
]
