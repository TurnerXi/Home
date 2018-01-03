const koa = require('koa');
const socket = require('koa-socket');
const session = require('koa-session2');
const store = require('./session');
const app = new koa();
const io = new socket();
io.attach(app);
app.use(session({store}));
let rooms = [];
let user_nums = 0;
app.use(async function(ctx,next){
  console.log("123",ctx.session);
  await next();
})
app.io.on('connection', (ctx,data) => {
   user_nums ++;

   ctx.socket.on('disconnect',function(){
     user_nums -- ;
   })
   //console.log(ctx);
   setInterval(function(){
    //  app._io.sockets.emit("monitor",{user_nums},ctx.session.user);
   });
});

app.listen("3004",function(){
    console.log("server listening on *:3004");
})
