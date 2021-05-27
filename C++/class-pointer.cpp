/**
 *
 * File:    class-pointer.cpp
 *          当类中有指针成员时，如何定义构造函数、复制构造函
 *          数、赋值运算符重载以及析构函数？
 *          需要采用深复制的方法，避免析构时的二次释放指针
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/5/27
 *          
 **/

class A {
private:
    int *x;
public:
    // 构造函数
    A() : x(nullptr) {}
    // 带参数的构造函数
    A(int p) {
        x = new int(p);
    }
    // 复制构造函数，调用复制运算符
    A(A &a) {
        *this = a;
    }
    // 赋值运算符重载，考虑自身赋值的情况以及
    // a中的x为空指针的情况
    A& operator=(const A& a) {
        if (this == &a) return *this;
        if (a.x == nullptr) {
            x = nullptr;
        } else {
            if (x) delete x;
            x = new int(*(a.x));
        }
        return *this;
    }
    /*
        // 另一种防止自赋值的方式（来自C++ primer第五版p453）
        A& operator=(const A &a) {
            if (x) delete x;
            auto newx = new int(*a.x);
            x = newx;
            return *this;
        }
    */
    ~A() {
        delete x;
        x = nullptr;
    }
};

int main() {
    int *p = new int(2);
    A a(*p);
    A b(a);
    a = a;
    delete p;
    return 0;
}