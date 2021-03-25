let arr = ['red', 'yellow', 'blue'];

/* 
 * 检测方法
 * 1.instanceof
 * 2.Array.isArray()
 */
console.log(arr instanceof Array);
console.log(Array.isArray(arr));

/*
 * 转换方法
 * 1.toLocaleString() 转换成字符串形式，调用数组每一项的toString()方法
 * 2.toString() 同上
 * 3.valueOf() 原样输出
 */
console.log(arr.toLocaleString());
console.log(arr.toString());
console.log(arr.valueOf());

/*
 * 栈方法
 * 1.push() 接受任意数量参数，返回新数组的长度
 * 2.pop() 弹出数组最后一项，返回被弹出的数组项的值
 */
console.log(arr.push('black', 'green'));
console.log(arr.pop());