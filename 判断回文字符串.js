'use strict';
const judge = function (str) {
    return Object.is(str,str.split('').reverse().join(''))?'属于回文字符串':'不属于回文字符串';
};
console.log(judge('121'));

