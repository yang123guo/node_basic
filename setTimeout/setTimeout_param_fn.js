

/** 
 * setTimeout()：指定在多少时间之后把定时器代码插入到JS引擎队列中。
 * 并不是指定在多少时间之后立即执行定时器代码。
 * 
 * 1、!!!参数是字符串  执行类似eval的动作
 * setTimeout("console.log('1')",1000);   会在1秒后把代码插入JS引擎；
 * 
 * 2、参数是函数  n秒后插入js异步队列里
 * 
 * 
 * 3、!!! 参数是undefined 立即执行，时间不生效
 * setTimeout(console.log("1"),1000); 参数是undefined  会立即执行console.log("1")；
 * 还有下面的立即执行函数 其实也是undefined，立即执行
 * 
 * setTimeout 可以接受函数或者字符串作为参数
    这里给 setTimeout 传递了一个立即执行函数,相当于undefined ，
    也就是说等价于：setTimeout(undefined, ...)
    而立即执行函数会立即执行，那么应该是立马输出的 0 1 2 3 4
 */ 
for (var i = 0; i < 5; i++) {
  setTimeout((function(i) {
    console.log(i);
  })(i), i * 1000);
}


// 1.  立即执行
setTimeout(console.log("1"), 1000); // 会立即执行console.log("1")；

// 2. 
setTimeout("console.log('1')", 1000); //会在1秒后把代码插入JS引擎；

// 3. 
function text  () {
    var i = 0;
    // this指向window 找不到局部作用于i
    setTimeout("console.log(i)",1000);
};
text(); //并不会正确打印‘0’；

// 4.  
function text  () {
    var i = 0;
    // 此处的i保留着引用
    setTimeout(function () {console.log(i)},1000);
};
text(); //会正确打印‘0’；

// 5. 
function text () {
    for(var i = 0; i < 10; i++) { // 这里是var
        setTimeout(function() {console.log(i)},1000); 
    }
};

text(); //会打印10个 '10';

 

// 6. 
function text () {
   for(let i = 0; i < 10; i++) { // 这里是let
         setTimeout(function() {console.log(i)},1000);    

    }

};

text(); //会打印0 ...9';

 

// 7. 
function hellow (name) {

        let msg = name;

        console.log(msg);
        setTimeout(hellow, 1000, msg)

}

hellow('hellow')
