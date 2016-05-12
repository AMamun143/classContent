var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //

    var apiToHit = "http://api.openweathermap.org/data/2.5/weather?zip=" + result.username + ",us&appid=d48e7a773995bce1fb6ca3289862dd64";

console.log(apiToHit);
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  });
