//require http
var http = require('http');

//define a port listen on
var PORT = 8080;
var hit = 0;

//function to handle all requests
function handleRequest(request, response){
	hit++;
	response.end('<h1>It works!</h1><br><p>'+hit+' hits counted</p>');
}

//set up the server
var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log('server listening on: http://localhost:%s', PORT);
})

