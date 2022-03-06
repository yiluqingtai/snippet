/**
 *
 * File:    ch1/echo2/main.go
 *			更常见的for循环写法
 *			使用range关键词遍历集合，返回索引和对应的元素值
 *			这里不需要索引，使用_作为占位符
 *			另一种声明变量的方法: 使用:=符号
 *
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/6/23
 *
 **/

package main

import (
	"fmt"
	"os"
)

func main() {
	tmp, res := "", ""
	for _, arg := range os.Args[1:] {
		res += tmp + arg
		tmp = " "
	}
	fmt.Println(res)
}
