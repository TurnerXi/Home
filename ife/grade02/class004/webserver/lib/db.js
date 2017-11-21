import Redis from 'ioredis'
import logger from './logger'
class DataBase{
      /**
      * @nsp 命名空间
      */
     constructor (nsp){
        try {
             let options = {
               keyPrefix: nsp?`${nsp}:`:''
             }
             let redis = new Redis( "127.0.0.1", 6379, options);
             redis.monitor(function(err, monitor){
               monitor.on('monitor', function(time, args, source, database){
                  logger.info(`connect to redis , args : ${args}`);
               })
             })
             this.db = redis.multi();
        } catch (e) {
             logger.error("Redis初始化失败",e.message);
        }
     }

     static getInstance(nsp){
       return new DataBase(nsp).db;
     }
}

export default DataBase
