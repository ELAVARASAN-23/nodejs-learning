var route={
	'/': function index(req,res){
		res.writeHead(200);
		res.end('hello, world');
	},
	'/foo':function foo(req,res){
		res.writeHead(200);
		res.end('you are now view foo');
	}
}


var http=require('http');
http.createServer(function(req,res){
	if(req.url in route){
		return route[req.url](req,res);
	}
	res.writeHead(404);
	res.end(http.STATUS_CODES[404]);
}).listen(1337);
