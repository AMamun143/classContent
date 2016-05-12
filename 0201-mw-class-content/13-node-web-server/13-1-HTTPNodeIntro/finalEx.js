
var http = require('http');
var PORT = 8080;
var url = require('url');

// Initialize an array to hold the movie data
var movies = [];
// right now this gets flushed when the data is reset
// can you think of a way of handling that problem?

var server = http.createServer(function(req, res){//callback function for server
	var method = req.method;
	var url_parts = url.parse(req.url);

	//if the movie route is hit, this will execute
	if(url_parts.pathname == '/movie'){
		
		//if the reqest had data it, this will run	
		req.on('data', function(data){
			if(method == "POST"){ //if the data is posted to the server, add the movie to our array
				movies.push(data);
				console.log(data + " saved to request data");	
			}
		}).on('end', function(){
			res.end(movies.join(', '));	//return the movie array to the user! Must be a string
		})	
	}
});

server.listen(PORT, function(){
	console.log('server on port ', PORT);
})

// Don't test from terminal, won't work right now

// TEST With These Commands from the terminal!
// POST some data to the server
// curl -i -H "Accept: application/json" -X POST -d "point break" http://localhost:8080/movie

// GET request
// curl -i -H "Accept: application/json" -X GET http://localhost:8080/movie

// Go Further! If the delete method is used, remove whatever data is sent in the request from the array.
