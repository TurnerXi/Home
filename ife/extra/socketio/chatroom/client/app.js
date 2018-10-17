var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/*',function(req,res){
    res.sendFile(__dirname+req.path);
})
var sockets = [];

io.of('/admin').on('connection',function(socket){
  sockets.push(socket);
  socket.broadcast.emit("join room",socket.handshake.query.username +" 加入了聊天室");
  socket.on('send message',function(data){
    socket.broadcast.emit("send message",socket.handshake.query.username+"说： "+data);
  });
  socket.on('disconnect',function(){
    sockets.splice(sockets.indexOf(socket),1);
    socket.broadcast.emit("leaving room",socket.handshake.query.username+" 离开了聊天室");
  });
  socket.on('typing message',function(){
    socket.broadcast.emit("typing message",socket.handshake.query.username);
  });
  socket.on('typing over',function(){
    socket.broadcast.emit("typing over",socket.handshake.query.username);
  });
  setInterval(function(){
      var users = sockets.map(function(item){
        return item.handshake.query.username;
      })
      io.sockets.emit("user list",users);
  },10000);
})

http.listen("3000",function(){
  console.log('server listening on *:3000');
})
