function foo (name){
    this.name= name;

}

const f = new foo('张三');
console.log(f.__proto__);

console.log(f.constructor === foo);

console.log(foo.prototype.__proto__ === Object.prototype);

console.log(Object.prototype === Function.prototype.__proto__);

console.log(Function.prototype);