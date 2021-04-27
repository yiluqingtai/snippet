/**
 *
 * File:    function/scope.js
 *          函数概述
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/27
 *          
 **/

// 1、Js中没有块级作用域，但有函数作用域
// 全局变量
var a = 10;

// 函数局部变量，外部不可访问
(function() {
    var b = 3;
})();

// 在for循环里面，没有块级作用域，item外部可访问，所以一般将item定义在外面，防止理解错误
for (var item in {a : 1, b : 2}) {
    console.log(item);
}

// 2、使用()或!将函数变为函数表达式，保护内部变量，使其不可被外部访问
(function() {
    var a, b; // a和b外部不可访问
})();

!function() {
    var a, b; // a和b外部不可访问
}();

