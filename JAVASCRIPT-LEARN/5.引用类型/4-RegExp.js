/* 格式： /pattern（模式） /flags（标志，1：g（表示全局）2：i（表示不区分大小写）3：m（表示多行） */

// 字面量形式
let pattern1 = /[bc]at/i;

// 构造函数形式
let pattern2 = new RegExp("[bc]at", "i");

// RegExp属性
// 1.global 2.ignoreCase 3.lastIndex 4.multiline 5.source
console.log(pattern1.source);

// exec()方法 接收要应用模式的字符串 额外属性：index（匹配项在字符串中的位置）和input（应用模式的字符串）,每次只返回一个匹配项
let text1 = 'cat, bat, sat, fat';
let pattern3 = /.at/gi;
let matches = pattern3.exec(text1);
console.log(matches);

// test()方法 接收字符串参数，当模式与该参数匹配时返回true，否则返回false
let text2 = '000-00-0000';
let pattern4 = /\d{3}-\d{2}-\d{4}/;

if (pattern4.test(text2)) {
    console.log('The pattern was matched');
}

// RegExp构造函数属性
// 1.input 最近一次要匹配的字符串
// 2.lastParen 最近一次匹配的捕获组
// 3.lastMatch 最近一次的匹配项
// 4.leftContext input字符串中lastMatch之前的文本
// 5.rightContext input字符串中lastMatch之后的文本
// 6.multiline 布尔值，表示是否所有表达式都支持多行模式