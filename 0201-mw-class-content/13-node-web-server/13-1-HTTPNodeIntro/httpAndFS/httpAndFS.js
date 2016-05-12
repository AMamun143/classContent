var http = require('http'),
  url = require('url'),
  fs = require('fs');
//This example is the same as server2.js
//BUT i use the node file system (fs) to server static files!

//Lets define a port we want to listen to
var PORT = 8080;

var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

//We need a function which handles requests and send response
function handleRequest(req, res) {
  var url_parts = url.parse(req.url, true, false);
  
  switch (url_parts.pathname) {
    case '/':
      displayRoot(url_parts.pathname, req, res);
      break;

    default:
      display404(url_parts.pathname, req, res);
  }
}

function displayRoot(url, req, res) {
   fs.readFile('index.html', function(err, data){
    if (err){
      res.writeHead(404);
      res.end(JSON.stringify(err));
      console.log(err);
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}

function display404(url, req, res){
  res.writeHead(404, {'Content-type': 'text/html'});
  res.write("<h1>404</h1><p>page not found!</p>");
  res.end("the page you are looking for " + url + "cannot be found");
}
