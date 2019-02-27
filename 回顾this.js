/**
 * @time  2019/1/8 16:29
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  现在开始回顾一遍JavaScript中的this绑定机制
 */

//默认绑定

this.a = 18;

//隐式绑定

// const obk = {
//     name:'张三',
//     fn(){
//         console.log(this.name);
//     }
// };
//
// obk.fn();

//显示绑定

// const obj = {
//     name:'我是obj的名字'
// };
//
// function f() {
//     console.log(this.name);
// }
// const gg = f.bind(obj);
//
// gg();

//new 绑定

function obj(name) {
    console.log(this)
}


const o = new obj()





