var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.end("hello Page 1");
    }

    if (req.url === '/gethello') {
        fs.readFile('./hello.html', (err, data) => {
            if (err) {
                fs.write("page not found");
                fs.end();
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        })
    }
    if (req.url === '/Q2/alaxcall.html') {
        fs.readFile('./alaxcall.html', (err, data) => {
            if (err) {
                fs.write("pagenotfound");
                fs.end();
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        })
    }
    // console.log("hello");
}).listen(8000);