const Server = require('socket.io');
const io = new Server(7777);

io.on('connection', function(socket){
  socket.broadcast.emit('join room',"someone join in the chat room");
  socket.on('chat message',function(msg){
    io.emit('chat message',msg);
  })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
