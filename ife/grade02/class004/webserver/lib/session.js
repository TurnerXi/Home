import {Store} from 'koa-session2'
import Redis from 'ioredis'

class RedisStore extends Store{
  constructor(){
    super();
    this.redis = new Redis();
  }

  async get(sid, ctx){
    let data = await this.redis.get(`SESSION:${sid}`);
    return JSON.parse(data);
  }

  async set(session, {sid = this.getID(24), maxAge = 1000000} = {}, ctx){
    try{
      await this.redis.set(`SESSION:${sid}`, JSON.stringify(session), "EX", maxAge / 1000);
    }catch(e){}
    return sid;
  }

  async destroy(sid, ctx){
    return await this.redis.del(`SESSION:${sid}`);
  }
}

export default new RedisStore()
