/**
 * @time  2019/2/19 2:23
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc 探索冻结对象
 */

'use strict'
const obj = {
    name:'张三'
};

Object.freeze(obj);

obj.age =18;

console.log();