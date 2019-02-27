/**
 * @time  2019/1/13 11:17
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  软知识回顾
 * @param  主要回顾一遍一些软知识
 */
//第一篇原型链回顾

 function arr() {

};

let s = new arr();
s.a = 3;
arr.prototype.b = 5;
console.log('b' in s)



