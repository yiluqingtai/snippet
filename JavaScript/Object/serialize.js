/**
 * 
 * File:    Object/serialize.js
 *          序列化
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/20
 * 
**/

// 序列化
var obj = {x : 1, y : 2, z : [1, 2, 3], m : 'hello'};
var str = JSON.stringify(obj);
console.log(str);

// 反序列化
var o = JSON.parse('{"x" : 1, "y" : 2}');
console.log(o.x);

