/**
 *
 * File:    ch1/dup2/main.go
 *			os.Open函数打开文件，得到*os.File类型的文件和错误标识err
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
	files := os.Args[1:]
	if len(files) == 0 {
		countLines(os.Stdin, counts)
	} else {
		for _, file := range files {
			f, err := os.Open(file)
			if err != nil {
				_, _ = fmt.Fprintf(os.Stderr, "dup2: %v", err)
				continue
			}
			countLines(f, counts)
			_ = f.Close()
		}
	}

	for line, n := range counts {
		if n > 1 {
			fmt.Printf("%d\t%s\n", n, line)
		}
	}
}

func countLines(f *os.File, counts map[string]int) {
	input := bufio.NewScanner(f)
	for input.Scan() {
		counts[input.Text()]++
	}
}
