/**
 *
 * File:    redis-cache-penetrate.cpp
 *          redis缓存穿透解决：缓存空对象
 *          如果数据库中没有查找到数据，将空对象存到缓存中，
 *          并设置缓存的过期时间
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/21
 *          
 **/

#include <string>
using namespace std;

string search(string &key) {
    string cache_value = cache.find(key);
    if (cache_value == nullptr) {
        string storage_value = storage.find(key);
        cache.set(key, storage_value);
        if (storage_value == nullptr) {
            cache.expire(key, 5 * 60);
        }
        return storage_value;
    } 
    return cache_value;
}