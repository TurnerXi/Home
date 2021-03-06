import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import https from 'https'
import fs from 'fs'
async function start() {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await new Builder(nuxt).build()
  }

  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })
  // SSL options
  var options = {
    key: fs.readFileSync(__dirname+'/../META-INF/privatekey.pem'),
    cert: fs.readFileSync(__dirname+'/../META-INF/certification.pem')
  };

  // start the server
  // http.createServer(app.callback()).listen(port, host);
  https.createServer(options, app.callback()).listen(443, host);

  // app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
