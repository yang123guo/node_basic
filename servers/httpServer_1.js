// 新建一个server
var http = require('http');
var ser = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<p>hello node!</p>')
})
ser.listen(3001);