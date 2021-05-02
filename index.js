const http = require('http');

http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>lol</h1>');

}).listen(8080, () => console.log('Server started on port 8080.'));
