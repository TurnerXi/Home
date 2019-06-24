const config = require('../config')
const { MongoClient, ObjectId } = require('mongodb');

module.exports = {
  getConnect: function () {
    return new Promise((resolve, reject) => {
      MongoClient.connect(config.mongodb_url, (err, client) => {
        if (err) {
          reject(err);
        } else {
          resolve(client.db(config.db_name))
        }
      });
    })
  }
}
