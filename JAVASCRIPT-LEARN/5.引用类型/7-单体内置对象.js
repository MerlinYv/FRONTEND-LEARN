// 单体内置对象：Object、Array、String
// Global
let msg = 'hello world';
eval('console.log(msg)');
var a = function() {
    return this;
}

console.log(this);

// Math
// min() 取最小值
// max() 取最大值
// ceil() 向上舍入
// floor() 向下舍入
// round() 标准舍入（四舍五入）
// random() 返回大于0小于1的随机数