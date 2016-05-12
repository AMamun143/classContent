var request = require('request');
request('http://www.omdbapi.com/?t=dumb+and+dumber&y=&plot=short&r=json', function (error, response, body) {
    console.log(body) // Show the HTML for the Google homepage. 
})