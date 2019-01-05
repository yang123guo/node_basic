process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    // 读取输入流 process.stdin.read()  命名为chunk   
    // process.stdout.write 如果不为null 输出到控制台
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`数据: ${chunk}`);
    }

    if(chunk == 1){
        // 如果为‘’空字符串 触发end事件
        process.stdin.emit('end');
        return
    }
});

process.stdin.on('end', () => {
    process.stdout.write('结束\n');
});