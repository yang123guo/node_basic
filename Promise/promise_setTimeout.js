// 执行结果，马上执行hello，过10秒执行over
// 说明了先进行Promise初始化, new Promise本身不是异步的，立即执行
let doSth = new Promise((resolve, reject) => {
  console.log('hello');
  resolve();
});

setTimeout(() => {
  doSth.then(() => {
    console.log('over');
  })
}, 10000);