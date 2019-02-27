const swap = function (a, b) {
    console.log(`您输入的a为${a},b为${b}`);
    b = a + b;
    a = b - a;
    b = b - a;
    console.log(`交换后的a为${a},b为${b}`);
};

swap(8, 9);