import UserInfoDto from '../dto/UserInfoDto'
class UserInfo {

  constructor({ _id, u_name, u_pwd, login_ip, login_time, reg_ip, reg_time, status } = {}) {
    this._id = _id;
    this.u_name = u_name;
    this.u_pwd = u_pwd;
    this.login_ip = login_ip;
    this.login_time = login_time;
    this.reg_ip = reg_ip;
    this.reg_time = reg_time;
    this.status = status;
  }

  getDto() {
    let dto = Object.assign(new UserInfoDto(), this);
    dto.userid = this._id;
    dto.username = this.u_name;
    dto.password = this.u_pwd;
    return dto;
  }

}

export default UserInfo
