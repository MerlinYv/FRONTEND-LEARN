let now1 = new Date();
console.log(now1);

// Date.parse() 接收一个表示日期的字符串参数
let now2 = new Date(Date.parse("May 25, 2004"));
console.log(now2);

// Date.UTC() 接收一个表示日期的字符串参数 年份（必需），基于0的月份（必需），天数（省略假设为1），小时数，分钟数，秒数，毫秒数（其它都为0）
let now3 = new Date(Date.UTC(2077, 1));
console.log(now3);

// Date.now() 返回调用这个方法时的日期和时间的毫秒数
let start = Date.now();
console.log(start);

// toLocaleString()、toString() 返回字符串形式日期
// valueOf() 返回日期的毫秒表示
let now4 = new Date();
console.log(now4.toString());
console.log(now4.valueOf());