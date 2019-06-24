const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session2')
const store = require('./lib/session')
const filter = require('./lib/filter')

const index = require('./routes/index')
const login = require('./routes/login')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(cors({ credentials: true }));
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(session({ store }));

app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
app.use(filter.resFormat);
// routes
app.use(index.routes(), index.allowedMethods())
app.use(login.routes(), login.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
