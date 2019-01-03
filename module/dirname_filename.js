var path = require('path');


// 输出: /faith/node_basic/module
console.log(__dirname);
// 输出: /faith/node_basic/module
console.log(path.dirname(__filename));

// 结论：前两个相等

// 输出: /faith/node_basic/module/dirname_filename.js
console.log(__filename);