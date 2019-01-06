var net = require('net');

var server = net.createServer(conn => {
    console.log('new connetion')
})