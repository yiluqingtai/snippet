/**
 * 
 * File:    arraysSimilar.js
 *          判断传入的两个数组是否相似，相似标准为：
 *          数组成员类型相同，顺序可以不同
 *          数组长度一致
 *          问题链接：https://www.imooc.com/code/5760
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/20
 * 
**/


var array1 = ["string", 2, true];
var array2 = [4, false, "array"];

var res = arraysSimilar(array1, array2);
console.log(res);

function arraysSimilar(arr1, arr2) {
    // 判断是否为数组
    if (!(arr1 instanceof Array) || !(arr2 instanceof Array))
        return false;

    // 判断长度是否相等
    var l1 = arr1.length, l2 = arr2.length;
    if (l1 != l2) return false;

    // 统计各个类型的元素个数
    var countmap1 = {}, countmap2 = {};
    for (var i = 0; i < l1; i++) {
        var type1 = type(arr1[i]);
        var type2 = type(arr2[i]);
        if (countmap1[type1]) {
            countmap1[type1]++;
        } else {
            countmap1[type1] = 1;
        }
        if (countmap2[type2]) {
            countmap2[type2]++;
        } else {
            countmap2[type2] = 1;
        }        
    }

    // 获得元素类型
    // 如果在浏览器中使用，添加如下行：
    // else if (ele === window) return "window";
    function type(ele) {
        if (ele === null) return "null";
        else if (ele instanceof Array) return "array";
        else if (ele instanceof Date) return "date";
        else return typeof ele; 
    }

    var types = ["string", "boolean", "number", "undefined",
                 "null", "array", "date"];
    // 判断两个数组的各个类型的元素个数是否相同
    for (var i = 0; i < types.length; i++) {
        if (countmap1[types[i]] != countmap2[types[i]]) 
            return false;
    }

    return true;

}