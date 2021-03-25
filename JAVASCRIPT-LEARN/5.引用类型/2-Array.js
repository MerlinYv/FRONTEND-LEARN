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
 * 1.push() 接受任意数量参数，添加在数组尾部，返回新数组的长度
 * 2.pop() 弹出数组最后一项，返回被弹出的数组项的值
 */
console.log(arr.push('black', 'green'));
console.log(arr.pop());

/*
 * 队列方法
 * 1.unshift() 接受任意数量参数，添加在数组头部，返回新数组的长度
 * 2.shift() 弹出数组第一项，返回被弹出的数组项的值
 */
console.log(arr.unshift('orange'));
console.log(arr.shift());

/*
 * 重排序方法
 * 1.reverse() 
 * 2.sort() 接受一个比较函数来规定排序规则
 */
console.log(arr.reverse());
console.log(arr.sort());

/*
 * 操作方法
 * 1.concat()
 * 2.slice()
 * 3.splice() 
 */