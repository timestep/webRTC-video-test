// var util = require('util'),
//     connect = require('connect'),
//     port = 5000;

// connect.createServer(connect.static(__dirname)).listen(port);
// util.puts('Listening on ' + port + '...');
// util.puts('Press Ctrl + C to stop.');

var express = require("express");
var server = express.createServer();
server.configure(function(){
  server.use(express.static(__dirname));
});

server.listen(5000);

console.log("Listening on Port 5000")