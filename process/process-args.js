// 启动命令：node process/process-args.js one two=three four
/* 
    0: /usr/local/bin/node
    1: /faith/node_basic/process/process-args.js
    2: one
    3: two=three
    4: four 
*/
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// 为node
console.log('process.argv0为：', process.argv0)

// 当前工作目录是: /faith/node_basic
console.log(`当前工作目录是: ${process.cwd()}`);

/** 
    start
    scheduled
    nextTick callback
    settimeout
 */
console.log('start');
setTimeout(() => {
    console.log('settimeout')
}, 0)
process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');