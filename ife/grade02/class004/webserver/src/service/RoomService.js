import DB from '../../lib/db'
import RoomInfo from '../entity/RoomInfo'

class RoomService {
  static create(userid) {
    return new Promise((resolve, reject) => {
      DB.getConnect().then(function (conn) {
        conn.collection('room_info').aggregate({ $group: { _id: null, room_num: { $max: "$room_num" } } }, function (err, doc) {
          let roomInfo = new RoomInfo(doc[0]);
          if(roomInfo.room_num && roomInfo.room_num > 0 ){
            roomInfo.room_num++;
          }else{
            roomInfo.room_num = 1;
          }
          roomInfo.players.push(userid);
          conn.collection('room_info').insert(roomInfo, function (err) {
            resolve(roomInfo.getDto());
          })
        })
      })
    })
  }

  static join(room_num, player_id) {
    return new Promise((resolve, reject) => {
      DB.getConnect().then(function (conn) {
        conn.collection('room_info').findOne({ room_num }, function (err, doc) {
          let roomInfo = new RoomInfo(doc);
          if (roomInfo.status == 1) { // 已开局
            resolve(false);
          } else if (roomInfo.players.length == 4) { // 每桌最大4人
            resolve(false);
          } else {
            conn.collection('room_info').update({ room_num: room_num }, { $push: { players: player_id } }, function (err) {
              resolve(true);
            });
          }
        })
      })
    })
  }

  static rooms() {
    return new Promise((resolve, reject) => {
      DB.getConnect().then(function (conn) {
        conn.collection('room_info').find().toArray( function (err, doc) {
          let rooms = [];
          doc.forEach((item) => {
            rooms.push(new RoomInfo(item).getDto());
          })
          resolve(rooms);
        })
      })
    })
  }

}

export default RoomService
