var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hello"
});

var user='elava';
var pass='elava';

/*con.connect(function(err) {
  if (err) throw err;
  var sql="select * from login where name= ? and password= ?";
  con.query(sql,[user,pass],function (err, result) {
    if (err) throw err;
    if(result.length===1){
    	console.log("your password and username is correct");
    }
  });
});
*/
con.connect(function(err){
  if(err) throw err;
  con.query("select * from login",function(err,result,fields){
    if(err) throw err;
    console.log(result);
  });
});
