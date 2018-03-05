/**
 * 开发环境的配置内容
 */
module.exports = {
  env: 'development', //环境名称
  port: 3004, //服务端口号
  db_name: 'test',
  mongodb_url: 'mongodb://127.0.0.1:27017', //数据库地址
  redis_url: 'http://127.0.0.1', //redis地址
  redis_port: '6379' //redis端口号
}
