/**
 *
 * File:    ch8/spinner/main.go
 *			goroutine：go语言的并发
 *			使用go语句开启新的线程
 *			本程序实现打印斐波那契数的值，同时用另一个线程显示等待画面
 *
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/7/6
 *
 **/

package main

import (
	"fmt"
	"time"
)

func main() {
	go spinner(100 * time.Millisecond)
	const n = 45
	fibN := fib(n)
	fmt.Printf("\rFibonacci(%d) = %d\n", n, fibN)
}

func spinner(delay time.Duration) {
	for {
		for _, r := range `-\|/` {
			fmt.Printf("\r%c", r)
			time.Sleep(delay)
		}
	}
}

func fib(x int) int {
	if x < 2 {
		return x
	}
	return fib(x-1) + fib(x-2)
}
