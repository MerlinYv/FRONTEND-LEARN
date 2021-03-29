// 对象都是基于引用类型创建的，可以是原生类型，也可以是开发人员定义的类型
let person = {
    name: 'Jack',
    age: 29,
    job: 'Software Engineer',
    sayName: () => {
        console.log(this.name);
    }
}

// 数据属性的四个特性
/*
 * 1.configurabale 表示能否通过delete删除属性，能否修改属性的特性
 * 2.enumerable 表示能否通过for-in循环返回属性
 * 3.writable 表示能否修改属性的值
 * 4.value 包含这个属性的值
 * 修改以上四个值只能通过Object.defineProperty()方法，接收三个参数：属性所在对象、属性名字和一个描述符对象（属性必须是以上四个）
 */

// 访问器属性
/*
 * 1.configurabale 表示能否通过delete删除属性，能否修改属性的特性
 * 2.enumerable 表示能否通过for-in循环返回属性
 * 3.get 读取属性时调用的函数
 * 4.set 写入属性时调用的函数
 */