const express = require('express');
const bodyparser=require('body-parser');
const mysql=require('mysql');
const crypto=require('crypto');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "hello"
});

const app=express();

app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/loginform.html');
});
app.post('/insert',(req,res)=>{
	var user=req.body.user;
	var pass=req.body.pass;

	const password = crypto.createHmac('md5','klajskjf').update(pass).digest('hex');


	con.connect(function(err){
		if(err)throw err;
		var sql='insert into login values("'+user+'","'+password+'")';
		con.query(sql,function(err,result){
			if(err)throw err;
			console.log("inserted sucessfullyy");
		});
	});
	res.end();
});
app.post('/login',(req,res)=>{
	var user=req.body.user;
	var pass=req.body.pass;
	const password= crypto.createHmac('md5','klajskjf').update(pass).digest('hex');

	con.connect(function(err) {
		if (err) throw err;
		var sql="select * from login where name= ? and password= ?";
		con.query(sql,[user,password],function (err, result) {
			if (err) throw err;
			if(result.length===1){
				console.log("one person login user is"+user);
				res.sendFile(__dirname+'/hello_world.html');
				
			}
			else{
				res.sendFile(__dirname+'/loginform.html');
				
			}
		});
	});
});

app.listen(8888,()=>{
	console.log('port is starting 8888');
});


















