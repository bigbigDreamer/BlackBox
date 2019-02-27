/**
 * @time  2019/2/27 16:50
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc   前端跨域只之cors
 */

fetch('http://localhost:3000/getData')
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    });