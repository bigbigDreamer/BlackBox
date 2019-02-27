/**
 * @time  2019/2/26 19:24
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc    阶乘练习
 */

function factorial(args,total) {
    return args === 1
        ? total
        : factorial(args - 1 ,args*total);
}

function bar(n) {
    return factorial(n,1);
}

// console.log(bar(5));

// function f(n) {
//     return  n === 1
//      ?1 : n * f(n-1);
// }

//console.log(f(100))

const Benchmark = require('benchmark');

const bench = new Benchmark(
    'foo test', // 测试名
    bar(10000), // 测试内容
    {
        setup: `console.log('start')`, // 每个测试循环开始时调用
        teardown: `console.log('over')` // 每个测试循环结束时调用
    }
)
bench.run(); // 开始测试

console.log(bench.times); // 测试延迟
console.log(bench.stats.moe); // 出错边界
console.log(bench.stats.variance); // 样本方差