import http from 'http'
import logger from 'koa-logger'
import json from 'koa-json'
import onerror from 'koa-onerror'
import Router from 'koa-router'
import router from './router-api'

export default function (app, ...nuxts) {
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000
  const baseRouter = new Router();
  baseRouter.all('/', function (ctx) {
    let ua = ctx.headers['User-Agent'];
    console.log(`user request by ${ua}`);
    if (ua.indexOf('mobile') > -1) {
      baseRouter.redirect('/app');
    }else{
      baseRouter.redirect('/pc');
    }
  })
  app.use(baseRouter.routes())
  app.use(router.routes(), router.allowedMethods())

  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxts.forEach(function (item) {
        item.then((nuxt)=>{
          nuxt.render(ctx.req, ctx.res, promise => {
            // nuxt.render passes a rejected promise into callback on error.
            if (promise) {
              promise.then(resolve).catch(reject)
            }
          })
        })
      })
    })
  })

  var server = http.createServer(app.callback())
  server.listen(port, host)
  server.on('error', onError)
  server.on('listening', onListening)

  /**
   * Event listener for HTTP server "error" event.
   */

  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    console.log('Server listening on ' + bind) // eslint-disable-line no-console
  }
}
