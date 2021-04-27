/**
 *
 * File:    function/arguments.js
 *          函数创建
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/27
 *          
 **/

// 1、arguments数组保存了函数的参数
function func(x, y, z) {
    console.log(arguments[0]);
    console.log(arguments.length);
}

func(1, 2);

// 2、函数具有length和name属性，分别表示函数参数的个数和函数名
console.log(func.length);
console.log(func.name);

// 3、函数的apply和call方法，可以传入对象和函数参数，call和apply方法的第一个参数与函数的this绑定
function foo(x, y) {
    console.log(x, y, this);
}

foo.call(7, 2, 3);
foo.apply(true, [3, 4]);