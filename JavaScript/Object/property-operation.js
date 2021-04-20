/**
 * 
 * File:    Object/property-operation.js
 *          属性操作
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/20
 * 
**/

// 属性读写两种方法
var obj = {x : 1, y : 2};
console.log(obj["x"]);
console.log(obj.y);

// 属性枚举
for (key in obj) {
    console.log(key);
}

// for in 语句枚举时会打印原型链上的属性
var o = Object.create(obj);
o.a = 3;
for (key in o) {
    console.log(key);
}
for (key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key);
    }
}