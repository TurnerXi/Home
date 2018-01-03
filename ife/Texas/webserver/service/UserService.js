const DB = require('../lib/db')
const UserEntity = require('./entity/UserEntity')

class UserService {
  static findByUserName(username) {
    return new Promise((resolve) => {
      DB.getConnect().then(function (conn) {
        conn.collection("user_info").findOne({
          'username': username
        }, function (err, doc) {
          if (!err && doc) {
            resolve(new UserEntity(doc));
          } else {
            resolve(null);
          }
          conn.close();
        });
      })
    })
  }

  static save(entity) {
    return new Promise((resolve, reject) => {
      DB.getConnect().then((conn) => {
        conn.collection("user_info").save(entity, function (err) {
          if (!err) {
            resolve(true);
          } else {
            reject();
          }
        });
      })
    })
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      DB.getConnect().then((conn) => {
        conn.collection("user_info").findOne({ _id: DB.ObjectId(id) }, function (err, doc) {
          err ? reject() : resolve(new UserEntity(doc).getDto());
        })
      });
    });
  }

}

module.exports = UserService;
