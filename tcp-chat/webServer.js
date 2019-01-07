// http服务 并监听3001端口
var http = require('http');
var qs = require('querystring');


/**
 * 

通过telnet访问： telnet localhost 3001

输入  GET / HTTP/1.1  两次回车

返回如下：

HTTP/1.1 200 OK
Content-Type: text/html
Date: Mon, 07 Jan 2019 16:45:36 GMT
Connection: keep-alive
Transfer-Encoding: chunked

14
<h1>hello http!</h1>
0

 */

http.createServer((req, res) => {
    if('/' == req.url) {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        });
        const endData = `<form method="POST" action="/url">
            <h1>my Form</h1>
            <fieldset>
                <label>个人信息</label>
                <p>what your name?</p>
                <input type="text" name="name"/>
                <button>提交</button>
            </fieldset>
        </form>`;
        res.end(endData);
    } else if ('/url' == req.url && req.method == 'POST') {
        var body = '';
        req.on('data', chunk => {
            body += chunk;
        })
        req.on('end', () => {
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            });
            res.end('<p>1、请求方法：' + req.method + '  2、请求头信息content-type：' + req.headers['content-type'] + '\n' +
                '   3、Data：' + body + '</p><p>你的名字是： '+ qs.parse(body).name +'</p>');
        })
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html;charset=utf-8'
        });
        res.end('<p>Not Found!</p>')
    }
    
}).listen(3001)