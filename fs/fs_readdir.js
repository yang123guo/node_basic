const fs = require('fs');

// process.cwd: /faith/node_basic  一个是node的执行路径
// __dirname: /faith/node_basic/fs  一个是当前文件所在的路径
console.log('process.cwd: ', process.cwd(), '__dirname: ', __dirname);

fs.readdir(/* process.cwd()*/__dirname, function (err, files) {
    if (err) {
        console.log(err);
        return;
    }   
    console.log('files:', files)
    var count = files.length;
    var results = {};
    files.forEach(function (filename) {
        fs.readFile(filename, function (data) {
            results[filename] = data;
            count--;
            if (count <= 0) {
                // 对所有文件进行处理
                console.log('结果：', results)
            }
        });
    });
});