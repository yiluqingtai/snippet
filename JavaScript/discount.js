/**
 *
 * File:    discount.js
 *          获得商品打折后的价格
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/27
 *          
 **/

var res = discount([10, 20, 30], 0.5);
console.log(res);

function discount(prices, discount) {
    var discounts = [];
    for (var i = 0; i < prices.length; i++) {
        var discountPrice = prices[i] * discount;
        var finalPrice = Math.round(discountPrice * 100) / 100;
        discounts.push(finalPrice);
    }
    return discounts;
}