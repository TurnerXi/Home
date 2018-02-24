const Router = require('koa-router')
const glob = require('./utils/glob')

var router = new Router({
  prefix: '/api'
});

glob.getEntries(`${__dirname}/routes/*`).forEach((entry)=>{
  var entry = require(`./routes/${entry}`)
  router.use(entry.routes(), entry.allowedMethods())
})

module.exports = router
