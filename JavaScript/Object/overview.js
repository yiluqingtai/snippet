/**
 * 
 * File:    Object/overview.js
 *          对象概述
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/20
 * 
**/


// JS对象包含一系列属性，每个属性是无序的，每个属性都包含
// 一个字符串key和对应的value
var o = {x : 1, y : 2};
console.log(o.x);

// o.x 和 o["x"]都能访问对象，注意x要加引号
var o1 = {};
o1[1] = 1;
console.log(o1);

// 对象的嵌套
var o2 = {};
o2[{x : 1}] = true;
console.log(o2);

// 原型链：获得构造器的原型的属性
function foo(){}
foo.prototype.z = 3;
var obj = new foo();
console.log(obj.z);