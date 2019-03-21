/**
 * @time  2019/3/21 19:48
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc    单例模式
 *
 *          确保一个类只有一个实例
 */


class Singleton {
    constructor() {
        this.instance = null;
    }

    static Single() {
        return !this.instance ? new Singleton() : '';
    }

}

const obj = Singleton.Single();
const obj1 = Singleton.Single();
console.log();