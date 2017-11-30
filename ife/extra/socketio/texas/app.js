var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/*', function (req, res) {
  res.sendFile(__dirname, req.path);
})
var nUsers = 0;
var rooms = {};
io.on('connection', (socket) => {
  var isAdd = false;
  socket.on('add user', function (data) {
    if (isAdd) return;
    socket.user = data;
    nUsers++;
    socket.emit("login", { nUsers });
  });
  socket.on('create room',function(roomid){
    if(rooms[roomid]) return;
    rooms[roomid] = {
      players:[socket],
      status:'ready',
      nums:1
    }
    socket.join(roomid);
  });
  socket.on('join room',function(roomid){
    if(!rooms[roomid] || rooms[roomid].status != 'ready') return;
    socket.join(roomid);
    socket.broadcast.emit('messsage',`welcome ${socket.user.username} join room`);
    rooms[roomid].players.push(socket);
    if(rooms[roomid].nums == 4){
      rooms[roomid].status = "begin";
      socket.emit('game begin');
    }
  });
  socket.on('bet',function(betmoney){
    if(betmoney<=0){
      socket.emit('')
    }
  })
});

http.listen('3000', function () {
  console.log('server listening on *:3000');
})
