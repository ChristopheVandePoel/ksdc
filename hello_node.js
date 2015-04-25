// hello_node.js
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}).listen(8124, "149.5.47.165");
console.log('Server running at http://127.0.0.1:8124/');
