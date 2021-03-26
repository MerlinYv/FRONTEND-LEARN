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