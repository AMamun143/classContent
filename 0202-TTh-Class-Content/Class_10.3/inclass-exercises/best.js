var fs = require('fs')
fs.readFile("overview-full-stack-flex-program.txt", "utf8", function(error, data) {if (error){console.log(error);}var res = data.substring(1, 500);console.log(res);});
