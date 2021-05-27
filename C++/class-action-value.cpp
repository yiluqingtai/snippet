/**
 *
 * File:    class-action-value.cpp
 *          来自C++ primer 第五版 p452中的拷贝控制和资源管理
 *          拷贝语义：使类的行为看起来像一个值或者像一个指针
 *          类的行为像一个值：它应该有自己的状态，拷贝一个像值的对象时，副本和原对象是完全独立的
 *          类的行为像一个指针：共享状态，拷贝对象时副本和原对象使用相同的底层数据，改变副本也会改变原对象
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/5/27
 *          
 **/

#include <string>
using namespace std;

class HasPtr {
public:
    HasPtr(const string &s = string()) :ps(new string(s)), i(0) { }
    // 对ps指向的string，每个HasPtr对象都有自己的拷贝
    HasPtr(const HasPtr &p) : ps(new string(*p.ps)), i(p.i) { }
    HasPtr& operator=(const HasPtr &);
    ~HasPtr() { delete ps; }
private:
    string *ps;
    int i;
};

HasPtr& HasPtr::operator=(const HasPtr &rhs) {
    auto newp = new string(*rhs.ps); //拷贝底层string
    delete ps;  // 释放旧内存
    ps = newp;  // 从右侧运算对象拷贝数据到本对象
    i = rhs.i;
    return *this;   // 返回本对象
}

