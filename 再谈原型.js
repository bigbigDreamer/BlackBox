//第一句话：所有的函数都有一个prototype属性
//第二句话：所有的对象都有一个__proto__属性指向原型
//第三句话：所有的原型对象[[prototype]]都有一个constructor属性指向其构造函数
//第四句话：所有的内置对象既是原生函数又是对象
//第五句话：函数的显式原型始终指向对象的隐式原型
//第六句话：原型链的尽头就是null

function Foo() {

}

const obj = new Foo();

console.log(Foo.prototype === obj.__proto__);
console.log(obj.constructor === Foo);
console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Object.constructor === Function);