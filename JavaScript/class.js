/**
 *
 * File:    class.js
 *          如何使用ES6添加的class语法糖
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/27
 *          
 **/

// 1、class定义类
// 常用定义
class User {
    // 4、公有字段
    type;
    // 5、私有字段
    #age;
    #name;
    // 6、公有静态字段
    static TYPE_ADMIN = "admin";
    static TYPE_REGULAR = "regular";

    // 3、构造函数constructor
    constructor(name, age, type) {
        this.#name = name;
        this.#age = age;
        this.type = type;
    }

    getName() {
        return this.#name;
    }

    // 8、getter和setter方法，将私有字段模拟为常规字段进行读写
    get name() {
        return this.#name;
    }

    set name(name) {
        if (name === '') {
            console.log('name field of User cannot be empty');
        } else {
            this.#name = name;
        }
    }

    // 7、this调用函数
    nameContains(str) {
        return this.getName().includes(str);
    }

}

// class表达式
const UserClass = class {

}

// 2、实例化class
const myUser = new User('Jon Snow', 25, User.TYPE_ADMIN);

// 测试
console.log(myUser.type);
console.log(myUser.getName());
console.log(myUser.nameContains('Jon'));
myUser.name = 'Jon White';
console.log(myUser.name);