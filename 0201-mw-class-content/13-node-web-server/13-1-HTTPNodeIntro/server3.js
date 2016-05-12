var http = require('http');

var PORT = 8080;

var reqData = ''; 
var server = http.createServer(function(req, res){

	var verb = req.method;
	
	req.on('data', function(data){
		reqData	+= data;
	})

	req.on('end', function(){
		var output = 'you just hit my server';
		output += ('request ended');
		output += (verb);
		console.log(output);
		res.end(output);
	})

});

server.listen(PORT, function(){
	console.log('server on port ', PORT);
})