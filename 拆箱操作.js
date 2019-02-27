let str = String('我爱你');
console.log(str);
//隐式拆箱
let s = str;
console.log(s + ' ');
//函数的显示原型对象恒等于  其实例化对象的隐式原型

function f() {

}
//constructor就是其构造器，object.constructor === Function;
let ff = new f()
console.log(ff.__proto__ === f.prototype);
console.log(ff.constructor === f);
console.log(f.prototype.constructor === f);