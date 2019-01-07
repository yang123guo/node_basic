var net = require('net');

var server = net.createServer(conn => {
    console.log('new connetion')
})

server.listen(3001, () => {
    console.log('监听http: 3001端口')
})