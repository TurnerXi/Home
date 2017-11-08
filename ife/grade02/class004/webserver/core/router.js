import router from 'koa-router'
import fs from 'fs'
fs.readdir("./controller",function(err, files){
  files.forEach(function(item){
    var port = require("../controller/"+item);
    console.log(port);
  })
})
