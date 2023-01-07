const http = require('http');
var fs = require('fs');
console.log('HELLO WORLD')

fs.appendFile('welcome.txt', 'Hello node', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


