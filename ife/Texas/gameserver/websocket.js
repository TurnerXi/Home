const socketIO = require('socket.io');
const socketioJwt = require('socketio-jwt');
const config = require('./config');

var websocket = function (server, app) {
  var sio = socketIO(server);

  sio.use(socketioJwt.authorize({
    secret: config.appkey,
    handshake: true
  }));

  sio.on('connection', function (socket) {
    socket.broadcast.emit("enter the hall",{username:socket.decoded_token.username});
    // if(socket.decoded_token){
    //
    // }
  })
}

module.exports = websocket
