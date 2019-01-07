// http服务 并监听3001端口
var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h1>hello http!</h1>')
}).listen(3001)