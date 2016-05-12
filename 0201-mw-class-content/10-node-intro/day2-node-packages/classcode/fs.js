var fs = require('fs');

//what does the . tell us about the fs variable??

//is it a number?

//is it a string?

//what is it?
fs.writeFile("movies.txt", "Terminator 2, The Dark Knight, Super Bad", function(mistake){
	console.log(mistake);


	console.log('the movies.txt file has content now!');

});