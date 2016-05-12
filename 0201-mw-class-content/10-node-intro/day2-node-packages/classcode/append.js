var fs = require('fs'); //reads and writes files

console.log(process.argv);

fs.appendFile("movies.txt", process.argv[2], function(err) {

    console.log("movies.txt was updated!");
}); 
