/**
 *
 * File:    function/overview.js
 *          函数创建
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/27
 *          
 **/

// 1、函数声明和函数表达式的区别：函数声明会被前置

// 函数声明
function add(a, b) {
    a = +a;
    b = +b;
    if (isNaN(a) || isNaN(b)) {
        return;
    }
    return a + b;
}

// 函数表达式
var add = function() {
    // do something
};

  // 立即执行的函数
(function() {
    // do something
})();

  // 函数对象作为返回值
return function() {
    // do something
};

  // 命名的函数表达式（不常用）
var add2 = function foo() {
    // do something
};

// 2、Function函数构造器（不常用）
var add3 = new Function('a', 'b', 'console.log(a + b)');

var add4 = Function('a', 'b', 'console.log(a + b)');