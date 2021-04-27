/**
 *
 * File:    function/closure.js
 *          闭包
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/27
 *          
 **/

// 1、闭包：函数中返回另一个匿名函数，该匿名函数返回外层函数中的局部变量
// 使用闭包后，函数的局部变量在函数调用后不会被释放
function outer() {
    var local_val = 23;
    return function() {
        return local_val;
    }
}

var fun = outer();
console.log(fun());

// 2、闭包的作用之一：封装
(function() {
    var _id = 123;
    var _type = 'item';
    var _export = {};

    function convert(id) {
        return +id;
    }

    _export.getId = function() {
        return convert(_id);
    }

    _export.getType = function() {
        return _type;
    }

    window.export = _export; // 浏览器中使用
}());

// export.getId(); // 123
// export._id; // undefined，无法访问

