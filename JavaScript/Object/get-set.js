/**
 * 
 * File:    Object/get-set.js
 *          get方法和set方法
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/20
 * 
**/

var man = {
    name : "yiluqingtai",
    $age : null,
    get age() {
        if (this.$age == undefined) {
            return new Date().getFullYear() - 1996;
        } else {
            return this.$age;
        }
    },
    set age(val) {
        val = +val;
        if (!isNaN(val) && val < 150 && val >= 0) {
            this.$age = val;
        } else {
            throw new Error('Incorrect value = ', val);
        }
    }
}

console.log(man.age);
man.age = 100;
console.log(man.age);
// man.age = 160;

// 定义函数原型的属性
function foo(){}
Object.defineProperty(foo.prototype, 'z', {get : function(){return 1;}});
var obj = new foo();
console.log(obj.z);
//原型属性默认不可更改
obj.z = 10;
console.log(obj.z);

Object.defineProperty(obj, 'z', {value : 100, configurable : true});
console.log(obj.z);
delete obj.z;
console.log(obj.z);

// 获取属性标签getOwnPropertyDescriptor
var label = Object.getOwnPropertyDescriptor({x : 1}, 'x');
console.log(label);
label = Object.getOwnPropertyDescriptor({x : 1}, 'y');
console.log(label);

// 定义属性标签defineProperty
var person = {};
Object.defineProperty(person, 'name', {
    configurable : true,
    writable : false,
    enumerable : false,
    value : 'yiluqingtai'
});

// 设置多个属性的标签
Object.defineProperties(person, {
    title : {value : 'fe', configurable : false},
    name : {value : 'wjy', configurable : true}
});
console.log(Object.getOwnPropertyDescriptor(person, 'title'));
console.log(Object.getOwnPropertyDescriptor(person, 'name'));




