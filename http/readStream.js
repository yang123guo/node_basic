var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'image/png'});

    var stream = require('fs').createReadStream('image.png');
    // 读取流
    stream.on('data', (data) => {
        res.write(data);
    })
    // 读取流结束
    stream.on('end', () => {
        res.end();
    })
}).listen(3000);