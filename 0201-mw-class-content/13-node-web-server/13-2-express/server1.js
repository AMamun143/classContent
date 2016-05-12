// Dependencies

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000; //avoid ports between 1-1234, use 3000, and 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var yoda = {
	name: "Yoda",
	role: "Jedi Master",
	age: 900,
	forcePoints: 2000
}

var darthMaul = {
	name: "Darth Maul",
	role: "Sith Lord",
	age: 200,
	forcePoints: 1200
}

var obiWanKenobi = {
	name: 'obi wan kenobi',
	role: 'Jedi Master',
	age: 70,
	forcePoints: 1000
}

// Listener
app.listen(PORT, function(){
	console.log('app is listening on port ' + PORT);
})

//Routes
//a get request to the root
app.get('/', function(req, res){
	res.send('<h1>Welcome to the Star Wars Page!</h1>')
})

app.get('/yoda', function(req, res){
	res.json(yoda);
});

//Go to localhost:3000/darthmaul
app.get('/darthmaul', function(req, res){
	res.json(darthMaul);
});

app.get('/obiwankenobi', function(req, res){
	res.json(obiWanKenobi);
});