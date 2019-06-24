function start(server,app) {
  const io = require('socket.io')(server);
  io.on('connection',function(socket){
    app.use()
  })
}

module.exports = function (server,app) {
  return {
    start: function () {
      start(server,app);
    }
  }
}
