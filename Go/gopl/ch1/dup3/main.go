/**
 *
 * File:    ch1/dup3/main.go
 *			io/ioutil的ReadFile函数可以整个读入文件
 * 			strings的Split函数可以分割字符串
 *
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/6/25
 *
 **/

package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func main() {
	counts := make(map[string]int)
	for _, filename := range os.Args[1:] {
		data, err := ioutil.ReadFile(filename)
		if err != nil {
			_, _ = fmt.Fprintf(os.Stderr, "dup3: %v\n", err)
			continue
		}

		for _, line := range strings.Split(string(data), "\n") {
			counts[line]++
		}
	}

	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%d\t%s\n", n, line)
		}
	}
}
