/**
 * 
 * File:    Object/constructor.js
 *          创建对象
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/20
 * 
**/

// 1、字面量创建，以及创建嵌套对象
var obj = {
    x : 1,
    y : 2,
    o : {
        z : 3,
        n : 4
    }
}
console.log(obj);

// 2、使用new创建，可以访问原型链上的属性
function foo(){}
foo.prototype.z = 3;
var obj = new foo();
obj.x = 1;
obj.y = 2;
console.log("obj.x=", obj.x);
console.log("obj.y=", obj.y);
console.log("obj.z=", obj.z);
console.log(typeof obj.toString);
console.log('z' in obj);
console.log(obj.hasOwnProperty('z'));

// 3、Object.create()方法创建
var obj = Object.create({x : 1});
console.log(obj.x);
console.log('x' in obj);
console.log(obj.hasOwnProperty('x'));