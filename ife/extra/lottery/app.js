const mysql = require('mysql');
const dbconfig = {
  host:'localhost',
  user:'root',
  password:'ilyf744520',
  database:'aizelasi'
}

var conn = mysql.createConnection(dbconfig);

conn.connect();

conn.query('select * from chart_gx11x5_base order by issue_code desc limit 0,100',function(err,results,fields){
  if(err) throw err;
  results.forEach(function(item){
    caculation(item['OPEN_CODE'],[item['N34'],item['N35'],item['N36'],item['N37'],item['N38'],item['N39'],item['N40'],item['N41'],item['N42'],item['N43'],item['N44']]);
  })
})

function caculation(open_code, miss_arr){
  var codes = open_code.split(',');
  codes.sort(function(a,b){
    return a-b;
  });
  console.log(codes,miss_arr);
}
