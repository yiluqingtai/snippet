/**
 *
 * File:    function/overview.js
 *          函数概述
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/27
 *          
 **/


// 1、JS中的函数也是对象，称为函数对象，可以调用函数对象的方法
// 2、函数返回值取决于return语句，如果没有return语句，默认返回undefined
// 3、JS函数需要掌握的内容：this, arguments, 作用域, 不同调用方式, 不同创建方式

// 函数示例：两数相加
function foo(x, y) {
    if (typeof x == "number" && typeof y == "number") {
        return x + y;
    } else {
        return 0;
    }
}

// 4、函数调用方法
// 直接调用:foo()
// 对象方法：o.method()
// 构造器调用：new Function()
// call/apply/bind方法: func.call(o)


// 代码测试
var print = foo(1, 2);
console.log(print);



