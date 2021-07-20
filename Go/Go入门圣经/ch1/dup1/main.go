/**
 *
 * File:    ch1/dup1/main.go
 *			bufio的NewScanner函数扫描输入
 *			Scan()函数作为判断条件，Text()函数获取扫描到的行
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/6/25
 *          
 **/


package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	counts := make(map[string]int)
	lines := bufio.NewScanner(os.Stdin)
	for lines.Scan() {
		counts[lines.Text()]++
	}

	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%d\t%s\n", n, line)
		}
	}
}