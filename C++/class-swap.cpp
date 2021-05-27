/**
 *
 * File:    class-action-swap.cpp
 *          来自C++ primer 第五版 p452中的拷贝控制和资源管理
 *          给类设计swap函数，交换两者的资源
 *          希望swap交换指针，而不是分配新的副本
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/5/27
 *          
 **/

#include <string>
using namespace std;

class HasPtr {
    friend void swap(HasPtr &lhs, HasPtr &rhs);
public:
    HasPtr(const string &s = string()) :ps(new string(s)), i(0) { }
    // 对ps指向的string，每个HasPtr对象都有自己的拷贝
    HasPtr(const HasPtr &p) : ps(new string(*p.ps)), i(p.i) { }
    HasPtr& operator=(HasPtr); // 使用swap函数实现拷贝赋值运算符，参数为按值传递
    ~HasPtr() { delete ps; }
private:
    string *ps;
    int i;
};

inline void swap(HasPtr &lhs, HasPtr &rhs) {
    using std::swap;
    swap(lhs.ps, rhs.ps);   // 交换指针，而不是string数据
    swap(lhs.i, rhs.i); // 交换int成员
}

HasPtr& HasPtr::operator=(HasPtr rhs) {
    swap(*this, rhs);   // rhs现在指向本对象曾经使用的内存
    return *this;   // rhs被销毁，从而delete了rhs中的指针
}

