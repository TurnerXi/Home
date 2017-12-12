var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var Texas = require('./index');
var texas = new Texas();

app.get('/*', function (req, res) {
  let path = __dirname+req.path;
  res.sendFile(path);
})
var nUsers = 0;
var rooms = {};
var beginNum = 3;
io.on('connection', (socket) => {
  var isAdd = false;
  var room = 0;
  socket.on('add user', function (data) {
    if (isAdd) return;
    socket.user = data;
    nUsers++;
    isAdd = true;
    socket.emit("login", { nUsers });
  });
  socket.on('create room',function(roomid){
    if(rooms[roomid]) return;
    rooms[roomid] = {
      players:[socket],
      status:'ready',
      nums:1
    }
    room = roomid;
    socket.join(roomid);
  });
  socket.on('join room',function(roomid){
    if(!rooms[roomid] ||   rooms[roomid].players.indexOf(socket)>-1 || rooms[roomid].status != 'ready') return;
    room = roomid;
    socket.join(roomid);
    rooms[roomid].players.push(socket);
    rooms[roomid].nums ++;
    let users = rooms[roomid].players.map((item)=>{return item.user});
    if(rooms[roomid].nums == beginNum){
      rooms[room].pub_cards = [];
      rooms[roomid].status = "begin";
      rooms[roomid].round = 0;
      rooms[roomid].under_money = 10;
      rooms[roomid].pool_money = 0;
      io.sockets.in(roomid).emit('game begin',users);
      sendPriCards(roomid);
    }else{
      io.sockets.in(roomid).emit('join room',users);
    }
  });
  socket.on('bet',function(betmoney){
    if(betmoney>=socket.user.wallet){
      betmoney = socket.user.wallet;
    }
    betmoney = Math.max(betmoney,rooms[room].under_money);
    rooms[room].pool_money+=betmoney;
    rooms[room].under_money = betmoney;
    socket.user.wallet -= betmoney;
    socket.emit('bet success',betmoney);
    socket.broadcast.emit("bet over",{'user':socket.user,'betmoney':betmoney});
    var index = rooms[room].players.indexOf(socket);
    if(index==rooms[room].nums-1){
      rooms[room].round+=1;
      for(var i=0;i<(rooms[room].round==1?3:1);i++){
        rooms[room].pub_cards.push(texas.show_card());
      }
      io.sockets.in(room).emit('send pub card',rooms[room].pub_cards);
      rooms[room].players[0].emit("begin bet",rooms[room].under_money);
    }else if(rooms[room].round!=3){
      rooms[room].players[index+1].emit("begin bet",rooms[room].under_money);
    }else{
      io.sockets.emit("compare all",rooms[room].players.map(function(item){ return {"user":item.user,"cards":item.cards}}));
    }
  });
  socket.on('max card type',function(fn){
    let cards = texas.get_max(socket.cards.concat(rooms[room].pub_cards).map(item=>{return item.num}));
    let card_type = texas.card_transform(cards.map(item=>{return item.num})).level_text;
    fn && fn(cards,card_type);
  });
  socket.on("compare all",function(){
    rooms[room].all_cards = [];
    rooms[room].players.forEach(function(item){
      rooms[room].all_cards.push(texas.get_max(item.cards.concat(rooms[room].pub_cards).map(item=>{return item.num})));
    });
    let result = texas.get_result(rooms[room].all_cards).map(function(item,idx){
      let player = rooms[room].players[idx];
      item.under_cards = player.cards;
      item.user = player.user;
      return item;
    });
    io.sockets.emit("compare all",result);
  });
  socket.on("disconnect",()=>{
    if(rooms[room]){
      rooms[room].nums--;
      let players = rooms[room].players;
      players.splice(players.indexOf(socket),1);
      nUsers --;
      socket.broadcast.emit("leave room",players.map((item)=>{return item.user}));
    }
  })
});

function sendPriCards(room){
  rooms[room].players.forEach(function(item){
    item.cards = [];
    item.cards.push(texas.show_card());
    item.cards.push(texas.show_card());
    item.emit("send pri card",item.cards);
  });
  rooms[room].players[0].emit("begin bet",rooms[room].under_money);
}

http.listen('3000', function () {
  console.log('server listening on *:3000');
})
