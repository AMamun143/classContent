// Dependencies

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000; //avoid ports between 1-1234, use 3000, and 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var characters = [
	{
		routeName: "yoda",
		name: "Yoda",
		role: "Jedi Master",
		age: 900,
		forcePoints: 2000
	},

	{
		routeName: "darthmaul",
		name: "Darth Maul",
		role: "Sith Lord",
		age: 200,
		forcePoints: 1200
	},

	{
		routeName: "obiwankenobi",
		name: 'obi wan kenobi',
		role: 'Jedi Master',
		age: 70,
		forcePoints: 1000
	}
]

var systems = [
	{
		routeName: "endor",
		suns: ['Endor', 'Endor II'],
		orbits: ['Moon of Endor']
	},

	{
		routeName: 'Galidraan',
		suns: ['Galidraan'],
		orbits: ['Galidraan', 'Galidraan II', 'Galidraan IV']
	}
]


// Listener
app.listen(PORT, function(){
	console.log('app is listening on port ' + PORT);
})

//Routes
//a get request to the root
app.get('/', function(req, res){
	res.send('<h1>Welcome to the Star Wars Page!</h1>')
})


app.get('/characters/:people', function(req, res){
	var chosen = req.params.people;
	console.log(chosen);
	

	for( var i=0; i < characters.length; i++){
		//if the character that was searched for is in the array
		//send back the data for that character
		if(chosen == characters[i].routeName){
			res.json(characters[i]);
			return;
		}

	}

	res.send('No character found');
	
})

app.get('/systems/:system', function(req, res){
		var chosen = req.params.system;
	console.log(chosen);
	

	for( var i=0; i < systems.length; i++){
		//if the character that was searched for is in the array
		//send back the data for that character
		if(chosen == systems[i].routeName){
			res.json(systems[i]);
			return;
		}

	}

	res.send('No system found');
})





















