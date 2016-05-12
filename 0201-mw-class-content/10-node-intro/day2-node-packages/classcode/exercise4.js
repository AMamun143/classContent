var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8' ,function(err, data){
	var things = data.split(', ');

	for (var i=0; i<things.length; i++) {
		console.log(things[i])
	};
});