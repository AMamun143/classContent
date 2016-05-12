var fs = require('fs'); //reads and writes files

fs.readFile("output/movies.txt", "utf8", function(error, data) {

  if(error){

    console.log(error);

  }
    console.log(data);

    var dataArr = data.split(',');

    console.log(dataArr);

});
