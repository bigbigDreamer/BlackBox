/**
 * @time  2019/2/27 19:34
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc   对象内审
 */

class Bird {
    constructor(age) {
        this.age = age;
    }

    sing(){
        console.log(`我是一只小小小小鸟！~~~~~~~`);
    }
}

let bird = null;
!(bird instanceof Bird) ? bird = new Bird(18) : '该对象已存在';

console.log(bird);
bird.sing();