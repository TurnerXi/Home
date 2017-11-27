import RoomInfoDto from '../dto/RoomInfoDto'
class RoomInfo {
  constructor({ _id, room_num, players= [], status= 0 } = {}) {
    this._id = _id;
    this.room_num = room_num;
    this.players = players;
    this.status = status;
  }

  getDto() {
    let dto = Object.assign(new RoomInfoDto(), this);
    dto.room_id = this._id;
    return dto;
  }
}

export default RoomInfo
