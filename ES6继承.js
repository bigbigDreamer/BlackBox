/**
 * @time  2019/2/27 19:54
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc  Try some ES6 inheritance
 * @todo Try to implement object privatization, that is, freeze the object.
 */
//动物类

class Animal {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(this.name);
    }
}

//子类鸟
class Bird extends Animal {
    constructor(name) {
        super(name);
    }
}

//实例化鸟对象
const bird = new Bird('鹦鹉');
//对象私有化
Object.freeze(bird);
console.log(bird.constructor);