
var express = require('express');
var app = express();


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
  res.send('Hello World!');
});


app.post('/', function(req, res, next) {
 // Handle the post for this route
});