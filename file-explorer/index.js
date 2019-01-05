/**
 * 主入口文件
 */

var fs = require('fs');
var {
    stdout,
    stdin
} = process;

// 这里的 点. === process.cwd();
// var files = fs.readdirSync('.');
// console.log(files, '同步文件');

fs.readdir(__dirname, (err, files) => {
    if(err) {
        console.log(err, '错误');
        return;
    }
    if(!files.length) {
        console.log('\033[31m 没有文件! \033[39m \n')
    }
    console.log('请选择一个课件的文件\n');

    // 定义一个函数
    function file(i) {
        var filename = files[i];

        fs.stat(__dirname + '/' + filename, (err, stat) => {
            if(stat.isDirectory()) {
                console.log('是目录'+ i + ': ' + filename)
            }else {
                console.log('是文件'+ i + ': ' + filename)
            }

            if (++i == files.length) {
                console.log('i等于文件个数')
                // 把读取函数抽出来
                read();
            }else {
                file(i);
            }
        })
    }

    function read() {
        stdout.write('请输入有效的文件名称：');
        stdin.resume();
        stdin.setEncoding('utf8');
        // 监听输入的内容
        stdin.on('data', option);
    }

    function option(data) {
        console.log(data, 'data是什么？')
        // 如果输入的无效
        if(!files[Number(data)]) {
            stdout.write('请输入有效的文件名称：');
        } else  {
            stdin.pause();
        }
    }

    file(0)
});
