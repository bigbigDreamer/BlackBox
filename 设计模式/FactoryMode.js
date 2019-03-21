/**
 * @time  2019/3/21 16:21
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc   FactoryMode
 *         - 将new操作单独封装
 *         - 遇到new时，就要考虑是不是该用工厂模式进行操作了？
 *
 *
 *         场景
 *
 *         - jQuery - $('div')
 *         - React.createElement
 *         - Vue异步组件
 */

class Product{
    constructor(name){
        this.name = name;
    }

    init(){
        console.log(123);
    }
}

class Creator{
    create(){
        return new Product(123);
    }
}

let create = new Creator();

let p = create.create();

p.init();