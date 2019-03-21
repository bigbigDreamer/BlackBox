/**
 * @time  2019/3/18 15:16
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc   对于Error 的二次探索
 */


function cacle(max, min) {
    return max > min ?
        console.log('您的结果是正确的！') :
        (() => {
            const err = new Error('结果错误');
            err.name = 'CaculError';
            throw err;
        })();

}

try {
    cacle(4, 5)

} catch (e) {
    console.log(e);
}