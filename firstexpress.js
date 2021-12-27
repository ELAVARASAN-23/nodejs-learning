const express = require('express');
const app = express();
app.get('/ping', (request, response) => {
	var a=10,b=20;
	var c=a+b;
 response.send(`<h1>Hello Prabhu</h1>${c}`);
});


app.get('/hello',(req,res)=>{
	res.send("<h1>This to hello</h1>");
});

app.listen(8123, ()=>{
	console.log("8123");
});