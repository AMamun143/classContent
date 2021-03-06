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


app.get('/characters/:people?', function(req, res){
	var chosen = req.params.people;
	console.log(chosen);

	//? makes that part not required to hit the route
	//only do this part if a :people was included in the route
	if(chosen){

		for( var i=0; i < characters.length; i++){
		//if the character that was searched for is in the array
		//send back the data for that character
			if(chosen == characters[i].routeName){
				res.json(characters[i]);
				return;
			}

		}
		res.send('No character found');

	}else { //if there was no character was searched for
		res.json(characters);
	}


})

app.get('/systems/:system?', function(req, res){
		var chosen = req.params.system;
	console.log(chosen);
	
	if(chosen){
		for( var i=0; i < systems.length; i++){
			//if the character that was searched for is in the array
			//send back the data for that character
			if(chosen == systems[i].routeName){
			res.json(systems[i]);
			return;
			}
		}	
		res.send('No system found');	
	}else { //no particular system was searched for
		res.json(systems);
	}
	
})


//only get request so far
//slack the channel one other http verb that we know!

app.post('/characters/new', function(req, res){
	var newCharacter = req.body;

	console.log(newCharacter);

	//take in the character from the post request
	//add it to the characters array
	characters.push(newCharacter);
	
	res.json(newCharacter);
})






















