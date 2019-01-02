// 浏览器端和node端都是  2 3 5 4 1
/**
 * 1、首先setTimeout遇到，放到异步任务队列里，当执行环境没有待执行的程序才去取出执行（宏任务）
 * 2、执行promise打印2
 * 3、执行for循环，当i === 9999时候 把then 放到当前 tick 的最后，但是还是在当前 tick 中（微任务），
 * 4、此时继续向下执行输出3
 * 5、执行5
 * 6、取出微任务中的4执行
 * 7、取出宏任务中的1执行
 */
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for( var i=0 ; i<10000 ; i++ ) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);