/**
 *
 * File:    function/this.js
 *          函数概述
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/27
 *          
 **/

// 1、浏览器全局this即为window, nodejs里面则为global对象
// console.log(this === window); // true(browser)

// 2、一般函数的this(window或global对象)，严格模式下为undefined
function f1() {
    return this;
}
// console.log(f1() === window); // true(browser)

// 3、作为对象方法的函数的this
var o = {
    prop : 37,
    f : function() { // 对象的属性值如果是函数，一般称该函数为对象的方法
        return this.prop;
    }
};
console.log(o.f()); // 37

// 4、对象方法的另一种定义方式
var o2 = {prop : 37};
function independent() {
    return this.prop;
}
o2.f = independent;
console.log(o2.f());

// 5、对象原型链上的this
var o3 = {f : function() {return this.a + this.b;}};
var p = Object.create(o3);
p.a = 1;
p.b = 2;
console.log(p.f());

// 6、get/set方法与this
function modulus() { return Math.sqrt(this.re * this.re + this.im * this.im);}

var o4 = {
    re : 1,
    im : -1,
    get phase() {
        return Math.atan(this.im, this.re);
    }
}

Object.defineProperty(o4, 'modulus', {
    get : modulus,
    enumerable : true,
    configurable : true
});

console.log(o4.phase, o4.modulus);

// 7、构造器中的this
// o5的a为原型链上的MyClass对象的a
function MyClass() {
    this.a = 37;
}

var o5 = new MyClass();
console.log(o5.a);

// o6的a为原型链上的MyClass2对象返回的{a : 38}对象的a
function MyClass2() {
    this.a = 37;
    return {a : 38}
}
var o6 = new MyClass2();
console.log(o6.a);

// 8、函数的call和apply方法，可以将对象作为参数传递，参数对象为函数的this
function foo(c, d) {
    return this.a + this.b + c + d;
}
var o7 = {a : 1, b : 2};
var res1 = foo.call(o7, 3, 4);
var res2 = foo.apply(o7, [5, 6]);
console.log(res1);
console.log(res2);

// 9、函数的bind方法将某个对象和函数中的this绑定
function m() {
    return this.a;
}
var g = m.bind({a : 'test'});
console.log(g());

var o8 = {m : m, g : g, a : 37};
console.log(o8.m());
console.log(o8.g());



