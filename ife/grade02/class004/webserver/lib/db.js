import Redis from 'ioredis'
import logger from './logger'
class DataBase{
     //Redis服务器IP
      //ADDR = ;
      //Redis的端口号
      //PORT = ;
     constructor (nsp){
        try {
             let redis = new Redis( "127.0.0.1", 6379, { keyPrefix: `${nsp}:` });
             this.db = redis.multi();
             redis.monitor(function(err, monitor){
               monitor.on('monitor', function(time, args, source, database){
                  logger.info(`connect to redis , args : ${args}`);
               })
             })
        } catch (e) {
             logger.error("Redis初始化失败",e.message);
        }
     }
     static getInstance(nsp){
       return new DataBase(nsp);
     }

     get(id){
       this.db = this.db.hgetall(id);
       return this;
     }

     all(){
       return this.db.hgetall(id);
     }

    query(){

     }

     save(id, object){
       this.db = this.db.hmset(id,object);
       return this;
     }

     del(id){
       return this.db.del(id);
     }

     modify(id, object){
       let keys = Object.keys(object);
       let arr = [];
       for(let key of keys){
         arr.push(key);
         arr.push(object[key]);
       }
       return this.db.hmset(id,...arr);
     }

     exec(fn){
         this.db = this.db.exec((fn != undefined && typeof fn == "function")?fn : function(){});
     }
}

var db = new DataBase("user");
db.save(4,{'name':'hah','age':11}).get(4).exec(function(err,res){
  console.log(res[1][1]);
})





export default DataBase
