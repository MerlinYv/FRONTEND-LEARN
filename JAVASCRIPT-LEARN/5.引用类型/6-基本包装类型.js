// 三种基本包装类型：Number、String、Boolean

// Boolean类型(布尔表达式中所有对象都会被转为true)
let booleanObject = new Boolean(true);
console.log(typeof booleanObject);
console.log(booleanObject instanceof Boolean);

// Number类型
let num = 10;
// 方法-toFixed()-添加小数位
console.log(num.toFixed(2));
// 方法-toExponential()-以指数显示数字,接收一个参数规定小数位
console.log(num.toExponential(1))
    // 方法-toPrecision()-根据数据自动决定调用以上哪个方法
console.log(num.toPrecision(4));

// String类型
let strVal = 'hello world';
let strObj = new String('hello world');
console.log(typeof strVal, typeof strObj);
// 属性-length
console.log(strVal.length);
/*
 * 方法
 * 1.charAt()-接收一个参数（基于0的字符位置），返回该位置的字符
 * 2.charCodeAt()-接收一个参数（基于0的字符位置），返回该位置的字符编码
 * 3.concat()-接收多个参数，拼接参数和原字符串，返回新字符串
 * 4.slice()-接收两个参数，第一个为开始位置，第二个为结束位置，返回新字符串
 * 5.substring()-同上，但会将负值转变为0，返回新字符串
 * 6.substr()-接收两个参数，第一个是开始位置，第二个是返回的字符个数，返回新字符串
 * 7.indexOf()-接收一个子字符串，搜索并返回字符串位置，如果没有找到，返回-1
 * 8.lastIndexOf()-同上，但是从后往前
 * 9.trim()-删除前置和后缀空格，返回处理好的新字符串
 * 10.toLowerCase()-转换为小写
 * 11.toUpperCase-转换为大写
 * 12.match()-只接收一个参数，正则表达式或RegExp对象
 * 13.search()-同上，没有找到返回-1
 * 14.replace()-接收两个参数，第一个是RegExp对象或者字符串，第二个参数是字符串或者函数
 * 15.split()-将字符串分割成数组，接收一个参数，按参数进行分割
 * 16.localeCompare()-接收一个字符串参数，比较字符串，在参数之前，返回-1，相等返回0，在参数之后 返回1
 * 18.fromCharCode()-接收多个字符编码，转换成一个字符串
 */