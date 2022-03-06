/**
 *
 * File:    ch1/echo1/main.go
 *			os包的Args变量存储命令行输入
 *			os.Args[0]表示命令本身
 *			命令参数用Args的切片来表示
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
	var tmp, res string
	for i := 1; i < len(os.Args); i++ {
		res += tmp + os.Args[i]
		tmp = " "
	}
	fmt.Println(res)
}
