/* 格式： /pattern（模式） /flags（标志，1：g（表示全局）2：i（表示不区分大小写）3：m（表示多行） */

// 字面量形式
let pattern1 = /[bc]at/i;

// 构造函数形式
let pattern2 = new RegExp("[bc]at", "i");

// RegExp属性
// 1.global 2.ignoreCase 3.lastIndex 4.multiline 5.source
console.log(pattern1.source);

// exec()方法 接收要应用模式的字符串 额外属性：index（匹配项在字符串中的位置）和input（应用模式的字符串）,每次只返回一个匹配项
let text = 'cat, bat, sat, fat';
let pattern3 = /.at/gi;
let matches = pattern3.exec(text);
console.log(matches);

// test()方法