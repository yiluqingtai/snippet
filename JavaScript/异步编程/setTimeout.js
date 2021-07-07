/**
 *
 * File:    setTimeout.js
 *          setTimeout()函数的用法
 *          定时回调相当于是一次异步操作
 *          setTimeout(code[, delay]);
 *          setTimeout(function[, delay, arg1, arg2, ...]);
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/7/7
 *          
 **/

let x = 3;

setTimeout(() => x = x + 4, 1000);

// 输出3，同步代码不会等待setTimeout执行完毕
// 后续代码如果要使用更改后的x，异步执行的函数需要更新x的值后通知其他代码
console.log(x);