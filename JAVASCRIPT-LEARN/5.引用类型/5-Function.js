// 函数也是对象，函数名是指向函数的指针，可以有多个
function sum1(n1, n2) {
    return n1 + n2;
}

let sum2 = function(n1, n2) {
    return n1 + n2;
};

let sum3 = new Function('n1', 'n2', 'return n1 + n2');

// 函数声明会被提前解析，函数表达式则不会
console.log(sum4(1, 2));

function sum4(n1, n2) {
    return n1 + n2;
}

function createComparisonFunction(propertyName) {
    console.log(propertyName);
    return function(object1, object2) {
        console.log(object1);
        let value1 = object1.propertyName;
        let value2 = object2.propertyName;

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

let data = [{ name: 'lisi', age: 18 }, { name: 'zhangsan', age: 20 }];
data.sort(createComparisonFunction("age"));
console.log(data[0].name);

/*
 * 函数内部属性
 * 1. arguments: 类数组对象，包含传入函数中的所有参数
 *  属性：arguments.callee:消除耦合，指向当前函数体
 * 2. this: 引用函数执行的环境对象
 * 3. caller: 保存调用当前函数的函数的引用
 */

/*
 * 函数属性和方法
 * 属性：
 * 1.length: 表示函数希望接收的参数的个数
 * 2.prototype: 保存所有实例方法的所在
 * 方法：
 * 1.call()：在特定的作用域中调用函数，实际上等于设置this的值。接收多个参数，第一个是在其中运行函数的作用域，剩下的是每一个参数（必须逐个列举）
 * 2.apply()：同上。接收两个参数，第一个是在其中运行函数的作用域，第二个是参数数组（可以为数组也可以是arguments）
 * 3.bind()：创建一个新的函数实例，实例的this值会被绑定到传给bind()函数的值，其余参数将作为新函数的参数，供调用时使用，从第一位开始
 */