# README

1. create a directory called calculator
2. create a package.json file
`npm init`
3. install things
`npm install express --save`
`npm install body-parser --save`
`npm install morgan --save`

4. create a server.js file
5. put in the following code into your server.js file so you can use your packages

```
var express = require("express");
var bodyParser = require('body-parser')
var app = express();
var logger = require("morgan");

app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000);
app.use(logger("dev"));
```

6. code away inside of your server.js file
