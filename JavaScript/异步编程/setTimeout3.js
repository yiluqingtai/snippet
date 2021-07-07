/**
 *
 * File:    setTimeout3.js
 *          给异步操作提供一个回调，这个回调中包含要使用异步返回值的代码（作为回调的参数）。
 *          (x)=>console.log()函数作为回调函数，传入到异步函数中，异步函数得到返回值时调用回调函数进行处理
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/7/7
 *          
 **/

function double(value, callback) {
    setTimeout(()=>callback(2 * value), 1000);
}

double(3, (x)=>console.log(`I was give: ${x}`));