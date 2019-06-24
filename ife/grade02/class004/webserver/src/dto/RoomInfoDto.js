import RoomInfo from '../entity/RoomInfo'

class RoomInfoDto {
  constructor({ room_num, players, status } = {}) {
    this.room_num = room_num;
    this.players = players;
    this.status = status;
  }

  getEntity() {
    return Object.assign(new RoomInfo(), this);
  }

  getInfo() {
    return Object.assign(new RoomInfo(), this);
  }
}

export default RoomInfoDto
