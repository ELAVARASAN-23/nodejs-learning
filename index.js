/*const my=require("./one");
const my2=require("./two");

my.func();

console.log(my.num);
my.dummy();

var obj=new my2.class1("Elavarasan");
obj.myfunction();

const http = require('http');
http.createServer((req,res)=>{
	console.log(req.url);
	console.log(2+3);
	res.writeHead(200,{'Content-Type': 'text/plain'});

	res.write('Hello World, welcome you all\n');

	res.end();
}).listen(process.env.PORT||2500,()=>{
	console.log("stared");

});
*/
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('hello_world.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(process.env.PORT||2500);