/**
 * @time  2019/3/18 14:39
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc   模拟jQ
 */

const $ = (function jQuery() {
    return function (selector) {
        return document.querySelector(selector);
    }
})();
