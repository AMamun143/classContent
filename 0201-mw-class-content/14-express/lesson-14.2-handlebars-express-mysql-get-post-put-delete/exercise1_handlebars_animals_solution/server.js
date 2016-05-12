var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var animals = [
  {animalType: 'dog', pet: true, fierceness: 4},
  {animalType: 'cat', pet: true, fierceness: 10},
  {animalType: 'giraffe', pet: false, fierceness: 4},
  {animalType: 'zebra', pet: false, fierceness: 8},
  {animalType: 'lion', pet: false, fierceness: 10}
];

app.get('/dog', function(req,res) {
  //handlebars requires an object to be sent to the dog handlebars file
  //lucky for us, animals[0] is an object!

  //1. send the dog object from the animals array to the dog handlebars file.
  res.render('dog', animals[0]);
});

app.get('/all-pets', function(req,res) {
  //handlebars requires an object to be sent to the index handlebars file

  //2. send the animals to the index handlebars file. Remember that animals is an array and not an object.
  var data = {
    anims : [animals[0], animals[1]]
  }
  res.render('index', data);
});

app.get('/all-non-pets', function(req,res) {
  //handlebars requires an object to be sent to the index handlebars file.

  //3. send all the animals that are not pets to the index handlebars file.

  var data = {
    anims : [animals[2], animals[3], animals[4]]
  }
  res.render('index', data);
});

var port = 3000;
app.listen(port);
