/**
 * @time  2019/3/18 14:27
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc   累加器
 *
 *    这里主要实现对于数组得类加功能
 */

const arr = [1,5,9,8,16,23];

let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,10);

console.log(sum);