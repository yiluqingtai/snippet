/**
 *
 * File:    class-action-pointer.cpp
 *          来自C++ primer 第五版 p452中的拷贝控制和资源管理
 *          拷贝语义：使类的行为看起来像一个值或者像一个指针
 *          类的行为像一个值：它应该有自己的状态，拷贝一个像值的对象时，副本和原对象是完全独立的
 *          类的行为像一个指针：共享状态，拷贝对象时副本和原对象使用相同的底层数据，改变副本也会改变原对象
 *          令一个类展现类似指针的行为最好方法是使用shared_ptr来管理类中的资源，但有时候需要直接管理资源，这时候需要使用引用计数
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/5/27
 *          
 **/

#include <string>
using namespace std;

class HasPtr {
public:
    // 构造函数分配新的string和新的计数器，将计数器置为1
    HasPtr(const string &s = string()) :ps(new string(s)), i(0), use(new int(1)) { }
    // 拷贝构造函数拷贝所有的三个数据成员，并递增计数器
    HasPtr(const HasPtr &p) : ps(p.ps), i(p.i), use(p.use) { ++*use; }
    HasPtr& operator=(const HasPtr &);
    ~HasPtr();
private:
    string *ps;
    int i;
    int *use; //用来记录有多少个对象共享*ps的成员
};

HasPtr::~HasPtr() {
    if (--*use == 0) { // 如果引用计数变为0
        delete ps;  // 释放string内存
        delete use; // 释放计数器内存
    }
}

HasPtr& HasPtr::operator=(const HasPtr &rhs) {
    ++*rhs.use; // 递增右侧运算对象的引用计数
    if (--*use == 0) {  // 然后递增本对象的引用计数
        delete ps;  // 如果没有其他用户
        delete use; // 释放本对象分配的成员
    }    
    ps = rhs.ps;    // 将数据从rhs拷贝到本对象
    i = rhs.i;
    use = rhs.use;
    return *this;   // 返回本对象
}

