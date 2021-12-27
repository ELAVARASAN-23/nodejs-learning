var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

console.log("url has no problem");

MongoClient.connect(url,function(err, db) {
  if (err) throw err;
  //console.log("database is created");
  var dbo=db.db("test");
  dbo.collection("movie").find({},{projection:{_id:0,name:1}}).toArray(function(err,result){
  	if(err) throw err;
  	console.log(result);
  	db.close();
  });
  
});