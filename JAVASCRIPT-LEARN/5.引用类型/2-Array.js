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
 * 1.push() 接收任意数量参数，添加在数组尾部，返回新数组的长度，改变原数组
 * 2.pop() 弹出数组最后一项，返回被弹出的数组项的值，改变原数组
 */
console.log(arr.push('black', 'green'));
console.log(arr.pop());

/*
 * 队列方法
 * 1.unshift() 接收任意数量参数，添加在数组头部，返回新数组的长度，改变原数组
 * 2.shift() 弹出数组第一项，返回被弹出的数组项的值，改变原数组
 */
console.log(arr.unshift('orange'));
console.log(arr.shift());

/*
 * 重排序方法
 * 1.reverse() 
 * 2.sort() 接收一个比较函数来规定排序规则
 */
console.log(arr.reverse());
console.log(arr.sort());

/*
 * 操作方法
 * 1.concat() 连接两个数组或字符串和数组，返回新数组，不改变原数组
 * 2.slice() 基于当前数组创建一个新数组，不改变数组。接收两个参数，分别是起始位置和结束位置，可接受负值，当结束位置小于起始位置时返回空值，如有两个参数，返回两者之间的项但不包括结束位置的项
 * 3.splice() 可以删除、插入和替换，返回被删除的项组成数组，改变原数组
 *   删除：接收两个参数，起始位置、删除项数
 *   插入：接收三个参数，起始位置、删除项数（指定为0）、要插入的项（可以指定多个）
 *   替换：接收三个参数，起始位置、删除项数（不一定和替换的项数一致）、要替换的项（可以指定多个）
 */
console.log(arr.concat(['gery', 'white']));
console.log(arr.slice(1, 3));
console.log(arr.splice(0, 1, 'dio', 'jojo'));

/*
 * 位置方法
 * 1.indexOf() 从起点开始找项在数组中的位置，返回下标，没找到返回-1
 * 2.lastIndexOf() 从最后开始找，同上
 */
let numArr1 = [1, 2, 3, 4, 5];
console.log(numArr1.indexOf(2));
console.log(numArr1.lastIndexOf(5));

/*
 * 迭代方法
 * 接收三个参数，数组项的值、该项在数组中的位置、数组对象本身
 * 1.forEach() 对数组中的每一项运行给定函数，无返回值，不改变原数组
 * 2.map() 对数组中的每一项运行给定函数,返回每次函数调用的结果组成的数组，不改变原数组
 * 3.filter() 对数组中的每一项运行给定函数，返回给定函数返回true的项目组成的数组，不改变原数组
 * 4.every() 对数组中的每一项运行给定函数，每一项都返回true，则返回true，不改变原数组
 * 5.some() 对数组中的每一项运行给定函数，有一项返回true，则返回true，不改变原数组
 */
numArr1.forEach((item, index, arr) => {
    arr[index] = 2;
})
console.log(numArr1);

let fa1 = numArr1.map((item) => {
    return item + 1;
})
console.log(fa1);

let numArr2 = [1, 2, 3, 4, 5]
let fa2 = numArr2.filter((item) => {
    return item > 3;
})
console.log(fa2);

let fa3 = numArr2.every((item) => {
    return item > 2;
})
console.log(fa3);

let fa4 = numArr2.some((item) => {
    return item > 2;
})
console.log(fa4);

/*
 * 归并方法
 * 接收两个值，调用的函数、归并基础的初始值
 * 调用的函数接收四个值，前一个值、当前值、项的索引、数组对象。这个函数的返回值会作为第一个参数（前一个值）传给下一项，第一次迭代从数组第二项开始，因此数组第一项就是函数第一个参数（前一个值），数组第二项就是函数第二个参数（当前值）
 * 1.reduce() 从开头起迭代数组所有的值，构建一个最终返回的值
 * 2.reduceRight() 从尾部开始，其它同上
 */
let numArr3 = [1, 2, 3, 4, 5];
let da1 = numArr3.reduce((pre, cur) => {
    return pre + cur;
}, 10)
console.log(da1);

let da2 = numArr3.reduceRight((pre, cur) => {
    return pre + cur;
}, 1)
console.log(da2);