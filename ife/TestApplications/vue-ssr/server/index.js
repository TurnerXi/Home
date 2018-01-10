import Koa from 'koa'
import BuildNuxt from './nuxt'
import StartServer from './server'
async function start () {
  const app = new Koa()
  BuildNuxt(app).then(function(nuxt){
    StartServer(app, nuxt)
  })
}

start()
