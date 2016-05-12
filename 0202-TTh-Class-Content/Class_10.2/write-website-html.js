var request = require('request');
var fs = require('fs');
request('http://www.rutgers.edu', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        fs.writeFile('whateverfile.txt', body, function(err) {

        })
    }
});
