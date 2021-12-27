var express=require('express');
var bodyparser= require('body-parser');
var app=express();

app.use(bodyparser.urlencoded({ 
	extended:true
}));

app.get('/',function(req,res){
	var html='<form method="post" action="/">'+
	'<input type="text" name="user"><br>'+'<input type="submit"></form>';
	res.send(html);
})
app.post('/',function(req,res){
	var name=req.body.user;
	var html='Hello'+name+'<br>';
	res.send(html)

});

app.listen(4000,()=>{
	console.log("4000");
});
