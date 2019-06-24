var dev_env = require('./dev');
var prod_env = require('./prod');

//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
module.exports = {
  'development': dev_env,
  'production': prod_env
}[process.env.NODE_ENV || 'production']
