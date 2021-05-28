/**
 *
 * File:    message.cpp
 *          来自C++ primer 第五版 p460中的拷贝控制示例；
 *          使用拷贝控制进行簿记工作；
 *          设计Message类和Folder类，分别表示电子邮件消息和消息目录；
 *          每个Message对象可以出现在多个Folder中，任意给定的Message
 *          的内容只有一个副本。如果一条Message的内容被改变，则我们从
 *          它所在的任何Folder来浏览此Message时，将会看到改变后的内容。
 *
 *          每个Message保存一个它所在Folder的指针的set，同样每个Folder
 *          都保存一个它包含的Message的指针的set
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/5/28
 *          
 **/

#include <string>
#include <set>
using namespace std;

class Message {
    friend class Folder;
public:
    // folders被隐式初始化为空集合
    explicit Message(const string &str = "") : contents(str) { }
    // 拷贝控制成员，用来管理指向本Message的指针
    Message(const Message&);    // 拷贝构造函数
    Message& operator=(const Message&); // 拷贝赋值运算符
    ~Message();
    // 从给定Folder集合中添加/删除本Message
    void save(Folder&);
    void remove(Folder&);
    
    void swap(Message&, Message&);

private:
    string contents;    // 实际消息文本
    set<Folder*> folders;   // 包含本Message的Folder
    void add_to_Folders(const Message&);    // 将本Message添加到指向参数的Folder中
    void remove_from_Folders(); //从folders中的每个Folder中删除本Message
};

void Message::save(Folder& f) { // 添加message到指定folder中
    folders.insert(&f);
    f.addMsg(this);
}

void Message::remove(Folder &f) { //  从指定folder中移除message
    folders.erase(&f);
    f.remMsg(this);
}

void Message::add_to_Folders(const Message& m) {  //  深拷贝message时调用的公共函数
    for (auto f : m.folders) {
        f.addMsg(this); //  对每个包含m的Folder，添加一个指向本Message的指针
    }
}

Message::Message(const Message& m) : contents(m.contents), folders(m.folders) {
    add_to_Folders(m);  //  深拷贝message，需要将每个folder里添加该message
}

void Message::remove_from_Folders() {   // 析构函数和拷贝赋值运算符所需的公共函数
    for (auto f : folders) {
        f->remMsg(this);    //  对每个保存该message的folder删除该message
    }
}

Message::~Message() {
    remove_from_Folders();
}

Message& Message::operator=(const Message& rhs) {
    remove_from_Folders();  // 更新已有Folders
    contents = rhs.contents;    // 从rhs拷贝消息内容
    folders = rhs.folders;  //  从rhs拷贝Folder指针
    add_to_Folders(rhs);    //  将本Message添加到那些Folder中
    return *this;
}

void Message::swap(Message &lhs, Message &rhs) {
    using std::swap;
    for (auto f : lhs.folders) {
        f->remMsg(&lhs);
    }
    for (auto f : rhs.folders) {
        f->remMsg(&rhs);
    }
    swap(lhs.folders, rhs.folders);
    swap(lhs.contents, rhs.contents);
    for (auto f : lhs.folders) {
        f->addMsg(&lhs);
    }
    for (auto f : rhs.folders) {
        f->addMsg(&rhs);
    }
    
}

/**************************************************************/

class Folder {
    friend class Message;
public:
    explicit Folder(const string &str = "") : name(str) { }
    Folder(const Folder&);
    Folder& operator=(const Folder&);
    ~Folder();

    // 删除和添加message
    void addMsg(Message*);
    void remMsg(Message*);

private:
    string name;    // Folder的名字
    set<Message*> messages; //存放本Folder中的Message
};


