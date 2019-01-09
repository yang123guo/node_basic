// file: 新建一个请求时间中间件

module.exports = function(opts) {
    // 新建变量time 默认值100
    var time = opts.time || 100;
    return function(req, res, next) {
        var timer = setTimeout(() => {
            console.log(req.method, req.url)
        }, time);
        // 保证引用
        var end = res.end;
        res.end = function(chunk, encoding) {
            // 把引用恢复给原函数
            res.end = end;
            res.end(chunk, encoding);
            clearTimeout(timer);
        }
        // 将执行流下去
        next();
    }
};


