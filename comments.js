// Create web server
// Run the following command to start the server: node comments.js
// View the server in a browser: http://localhost:3000

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('Request received');
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');