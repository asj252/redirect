'use strict'

var http = require('http');

var port = process.env.PORT || 3000;

var mappings = {
  g: 'https://igg.me/at/gobot'
};

var server = http.createServer(function(req, res) {
  var alias = req.url.substring(1);
/* if (!mappings[alias]) {
    res.writeHead(404);
    res.end();
    return;
  }
*/
// process.stdout.write("123"+req.url); 
  res.writeHead(302, {

     location: mappings['g']
  })
  res.end();
});

server.listen(port);