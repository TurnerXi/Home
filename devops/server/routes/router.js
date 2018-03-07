const Router = require('koa-router')
const glob = require('../utils/glob')

module.exports = function(prefix){
  var router = new Router({
    prefix
  });

  glob.getEntries(`${__dirname}${prefix}/*`).forEach((entry) => {
    console.log(entry)
    var entry = require(`.${prefix}/${entry}`)
    router.use(entry.routes(), entry.allowedMethods())
  })

  return router;
}
