const express =require('express');

const session =require('express-session');

const app =express();

app.use(session({
	secret: 'elavarasan',
	resave: true,
	saveUninitialized: true
}));

app.get('/',function(req,res){
	req.session.name='hello world';
	return res.send('session set');
});

app.get('/session',function(req,res){
	return res.send(req.session.name);
/*
	to destory the session use the function
	req.session.destroy(function(error){
	console.log('session destoryed');
	})
*/

});

app.get('/destroy',function(req,res){
	req.session.name.expires = new Date(Date.now()+30000);
	req.session.name.maxAge= 30000;
})

app.listen(4000,function(error){
	if(error) throw error;
	console.log('server started port is : 4000');
});
