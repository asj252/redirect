'use strict'

var http = require('http');

var mappings = {
  g: 'http://www.google.com'
};

var server = http.createServer(function(req, res) {
  var alias = req.url.substring(1);
//  process.stdout.write("123"+req.url);
  if (!mappings[alias]) {
    res.writeHead(404);
    res.end();
    return;
  }

// process.stdout.write("123"+req.url); 
  res.writeHead(302, {

     location: mappings[alias]
  })
  res.end();
});

server.listen(3000);