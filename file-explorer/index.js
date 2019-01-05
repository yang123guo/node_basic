/**
 * 主入口文件
 */

var fs = require('fs');

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

            i++
            if (i == files.length) {
                console.log('i等于文件个数')
                process.stdout.write('请选择：')
                process.stdin.resume();
            }else {
                file(i);
            }
        })
    }
    file(0)
});
