const UserDto = require('../dto/UserDto')

class UserEntity {

  constructor({ _id, username, password, login_ip, login_time, reg_ip, reg_time, status } = {}) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.login_ip = login_ip;
    this.login_time = login_time;
    this.reg_ip = reg_ip;
    this.reg_time = reg_time;
    this.status = status;
  }

  getInfo() {
    return { username: this.username, login_ip: this.login_ip, login_time: this.login_time, reg_ip: this.reg_ip, reg_time: this.reg_time, status: this.status };
  }
}

module.exports = UserEntity
