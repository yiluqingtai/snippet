/**
 *
 * File:    memcpy.cpp
 *          实现memcpy函数
 *          函数原型: void* my_memcpy(void* dst, const void *src, int n)
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/5/27
 *          
 **/

 void* my_memcpy(void *dst, const void* src, int n) {
     if (dst == nullptr || src == nullptr || n < 0) {
         return nullptr;
     }

     char *pdst = (char*) dst;
     char *psrc = (char*) src;

     if (pdst > psrc && pdst < psrc + n - 1) { // 如果源和目的字符重叠，从后往前复制
         pdst = pdst + n - 1;
         psrc = psrc + n - 1;
         while (n--) {
             *pdst-- = *psrc--;
         }
     } else {
         while (n--) {
            *pdst++ = *psrc++;
         }
     }

     return dst;
 }