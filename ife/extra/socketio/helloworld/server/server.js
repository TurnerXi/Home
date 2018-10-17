const Server = require('socket.io');
const io = new Server(7777);

io.of('/ns').on('connection', function(socket){
  socket.broadcast.emit('join room',"someone join in the ns chat room");
  socket.on('chat message',function(msg){
    io.emit('chat message',msg);
  })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.of('/nw').on('connection', function(socket){
  socket.broadcast.emit('join room',"someone join in the nw chat room");
  socket.on('chat message',function(msg){
    io.emit('chat message',msg);
  })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
