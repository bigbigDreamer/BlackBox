/**
 * @time  2019/1/25 20:32
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc 函数柯里化
 */

// function foo(a,b) {
//     return a+b;
// }
//
// const DMZ = Object.create(null);
//
// const bar = foo.bind(DMZ,5);
//
// console.log(bar(8));


function EventListener(obj,options,fn) {
    return obj.addEventListener(options,fn);
}

const DMZ = Object.create(null);

const fn = EventListener.bind(DMZ,'btn','click');

fn(fn);



