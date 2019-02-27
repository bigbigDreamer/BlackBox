/**
 * @time  2019/2/27 19:42
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc   终极版组合继承复习
 */

function Animal(name) {
    this.name = name;
    this.say = function (name) {
        console.log(name)
    }
}

function Bird() {
    Animal.call(this);
}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;

const b = new Bird();

b.name = '鸟';
b.say('niko');
console.log(b.constructor);

