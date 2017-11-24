import DB from '../../lib/db'
import UserInfo from '../entity/UserInfo'
class UserInfoService{
  static findByUserName(username){
    return new Promise((resolve) => {
      DB.getConnect().then(function (conn) {
        conn.collection("user_info").findOne({
          'username': username
        }, function (err, doc) {
          if(!err && doc){
              resolve(new UserInfo(doc).getDto());
          }else{
            resolve(null);
          }
           conn.close();
        });
      })
    })
  }

  static save(entity){
    return new Promise((resolve,reject)=>{
      DB.getConnect().then((conn) => {
        conn.collection("user_info").save(entity,function(err){
          if(!err){
            resolve(true);
          }else{
            reject();
          }
        });
      })
    })
  }

  static get(id){
    return new Promise((resolve,reject)=>{
      DB.getConnect().then((conn) => {
        conn.collection("user_info").findOne({_id:DB.ObjectId(id)},function(err,doc){
            err ? reject():resolve(new UserInfo(doc).getDto());
        })
      });
    });
  }

}

export default UserInfoService
