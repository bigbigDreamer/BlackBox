const os = require('os');

//获取系统空闲内存的数量以MB为单位
// setInterval(()=>{
//     console.log(os.freemem()/(1024*1024));
// },1000)

console.log(os.totalmem());