function *foo(data) {
    console.log('生成器开始运行');
    yield;
    console.log(data);
    //console.log(data);
}

const it = foo();

it.next('aini');
it.next(122);
//it.next(1225);