
function clone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

const source = {name:'张三'};

const obj2 =clone(source);
obj2.name = '李四';
console.log(source.name);