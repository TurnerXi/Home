import { MongoClient,ObjectId } from 'mongodb'
import logger from './logger'

class DataBase extends MongoClient {

  constructor() {
    DataBase.DB_URL = "mongodb://localhost:27017/texas";
    DataBase.ObjectId = ObjectId;
    super();
  }

  static getConnect() {
    if (!DataBase.db) {
      DataBase.db = new DataBase();
    }
    return DataBase.db.connect(DataBase.DB_URL);
  }
}
export default DataBase
