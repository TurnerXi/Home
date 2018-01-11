import Koa from 'koa'
import BuildMobileNuxt from './nuxt-mobile'
import BuildPCNuxt from './nuxt-pc'
import StartServer from './server'
async function start () {
  const app = new Koa()
  const mobile = BuildMobileNuxt(app)
  const PC = BuildPCNuxt(app)
  StartServer(app, mobile, PC)
}

start()
