// 创建对象
// 1.工厂模式
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}

let person1 = createPerson('Jack', 18, 'cooker');
console.log(person1);

// 2.构造函数模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}

let person2 = new Person('Nicholas', 29, 'Software Engineer');
console.log(person2);

// 3.原型模式
function Per() {}
Per.prototype.name = 'Tom';
Per.prototype.age = 29;
Per.prototype.job = 'Software Farmer';
Per.prototype.sayName = function() {
    console.log(this.name);
}

let person3 = new Per();
console.log(person3.sayName());