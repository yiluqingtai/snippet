/**
 *
 * File:    ch1/echo3/main.go
 *			使用strings包中的Join函数连接输出
 *			相比echo1和echo2的做法更加高效
 *
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/6/23
 *
 **/

package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Println(strings.Join(os.Args[1:], " "))
}
