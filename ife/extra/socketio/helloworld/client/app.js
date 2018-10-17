var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/resource/:file', function(req, res){
  res.sendFile(__dirname + '/resource/'+req.params.file);
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
