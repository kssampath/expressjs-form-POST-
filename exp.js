var express=require('express');
var app = express();
var bodyParser=require('body-parser');
var path = require('path');
	app.listen(8080,function() {
		console.log('listen function is listening on port 8080');
						});
	app.use(bodyParser());
//this tells for all the routing use this middleware
	app.get('/sachinsingh',function(res,req){
		req.send('this is a port 8080!');
											});
	app.post('/s',function(res,req)
	{
		req.end(JSON.stringify(res.body));
	});	
	app.get('/s',function(req,res){
		res.sendFile('nodeform.html',{root:path.join(__dirname,'')})
									});
