// var util = require('util'),
//     connect = require('connect'),
//     port = 5000;

// connect.createServer(connect.static(__dirname)).listen(port);
// util.puts('Listening on ' + port + '...');
// util.puts('Press Ctrl + C to stop.');

var express = require("express");
var app = express();

app.use(express.logger());

app.configure(function(){
  app.use(express.static(__dirname));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


console.log("Listening on Port 5000")