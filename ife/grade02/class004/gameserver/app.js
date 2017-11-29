const Server = require('socket.io');
const io = new Server(7777);

io.on('connection', function(socket){
  socket.on('join room',function(data){
    socket.join(data);
  })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
