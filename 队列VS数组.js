/**
 * @time  2019/3/18 15:56
 * @author  Eric Wang <vuejs@vip.qq.com>
 * @desc  queue_vs_array
 */
let targetArr = [];

class Queue {
    constructor() {
        this.queue = [];
    }

    EnterQueue(args) {
        this.queue.push(args);
    }

    returnSize() {
        return this.queue.length;
    }
}

console.time('timer');
let queue = new Queue();
for (let i = 0; i < 10000; i++) {
    queue.EnterQueue(i);
}
console.log(queue.returnSize());
console.log('QueueTime');
console.timeEnd('timer');

console.time('timer2');

for (let i = 0; i < 10000; i++) {
    targetArr.push(i);
}

console.log(targetArr.length);
console.log('ArrayTime');
console.timeEnd('timer2');
