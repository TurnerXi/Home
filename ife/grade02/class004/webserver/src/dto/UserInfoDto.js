import UserInfo from '../entity/UserInfo'
class UserInfoDto{

  constructor({userid,username,password,login_ip,login_time,reg_ip,reg_time,status} = {}){
    this.userid = userid;
    this.username = username;
    this.password = password;
    this.login_ip = login_ip;
    this.login_time = login_time;
    this.reg_ip = reg_ip;
    this.reg_time = reg_time;
    this.status = status;
  }

  getEntity(){
    let entity = Object.assign(new UserInfo(),this);
    entity.u_name = this.username;
    entity.u_pwd = this.password;
    return entity;
  }

  getInfo(){
    return {username:this.username,login_ip:this.login_ip,login_time:this.login_time,reg_ip:this.reg_ip,reg_time:this.reg_time,status:this.status};
  }
}

export default UserInfoDto
