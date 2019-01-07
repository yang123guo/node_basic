var net = require('net');
// 和http协议表现形式一样
// http协议是建立在tcp协议之上
var count = 0,
    users = {};
var server = net.createServer(conn => {
    console.log('新建tcp连接, 请输入您的nickname，并按下回车确认');
    count++;
    console.log('count计数器当前为:' + count);

    conn.setEncoding('utf8');

    var nickname;

    conn.on('data', (data) => {
        data = data.replace('\r\n', '');
        // 接收到第一份数据应该是用户的昵称
        if (!nickname) {
            if (users[data]) {
                conn.write('nickname 已经存在');
                return;
            }else {
                nickname = data;
                users[nickname] = conn;

                for(let i in users) {
                    users[i].write(nickname + '加入')
                }
            }
        }else {
            for (let i in users) {
                // 否则，视为聊天信息
                if (i != nickname) {
                    users[i].write(nickname + ': ' + data);
                }
            } 
        }
    })

    conn.on('close', () => {
        count--
        delete users[nickname]
        console.log('count计数器当前为:' + count);
    })
})

server.listen(3001, () => {
    console.log('监听http: 3001端口');
})