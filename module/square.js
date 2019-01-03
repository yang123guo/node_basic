// 赋值给 `exports` 不会修改模块，必须使用 `module.exports`。
// 类也多用 module.exports 导出
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};