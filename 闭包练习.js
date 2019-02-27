/**
 * @time  2018/12/10 21:47
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  闭包练习
 */

const _ = Object.create(null);

function Closure (){
    let i = 1;
    return function () {
        return i++;
    };
}

let cat = Closure();
console.log(cat());
console.log(cat());
console.log(cat());
