var url 		= require('url');
var express 	= require('express');
var app 		= express();

var transmission		= require('./routes/transmission.js')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(require('body-parser').json({limit: '50mb'}));

app.use('/transmission', transmission);

app.listen(3000);
console.log("Listen on 3000");
