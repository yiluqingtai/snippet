/**
 *
 * File:    setTimeout2.js
 *          等待1s后打印
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/7/7
 *          
 **/

function double (value) {
    setTimeout(()=>setTimeout(console.log, 0, 2 * value), 1000);
}

double(3);
