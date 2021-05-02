const http = require('http');

const requestHandler = (req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>lol</h1>');
};

const onServerStart = () => console.log('Server started on port 8080.');

const server = http.createServer(requestHandler);
server.listen(8080, onServerStart);
