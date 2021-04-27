/**
 *
 * File:    oop/overview.js
 *          概念和继承
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/27
 *          
 **/

// 1、基于原型的继承：每个函数都有一个prototype属性，该属性是一个对象

// obj可以拿到原型链上的x属性，实现了基于原型的继承
function Foo() {
    this.y = 1;
}

/** 
 * Foo.prototype对象的结构
 * {
 *      constructor : Foo,
 *      _proto_ : Object.prototype,
 *      x : 1
 * } 
**/
Foo.prototype.x = 2;

var obj = new Foo();
console.log(obj.x);
console.log(obj.y);

// Person类和Student类继承实例
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hi = function() {
    console.log('Hi, my name is ' + this.name + ' and I am ' + 
                this.age + ' years old.');
}
Person.prototype.LEGS_NUM = 2;
Person.prototype.ARMS_NUM = 2;
Person.prototype.walk = function() {
    console.log(this.name + ' is walking...');
};

function Student(name, age, className) {
    Person.call(this, name, age);
    this.className = className;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.hi = function() {
    console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + 
                ' years old. I am from class ' + this.className + '.');
}

// 测试
var yiluqingtai = new Student('yiluqingtai', 25, '902');
yiluqingtai.hi();
console.log(yiluqingtai.ARMS_NUM);
yiluqingtai.walk();
