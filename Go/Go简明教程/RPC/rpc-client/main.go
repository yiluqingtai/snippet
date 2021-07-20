

package main

import (
	"log"
	"net/rpc"
)

type Result struct {
	Num, Ans int
}

/*
func syncCall() {
	// 使用 rpc.DialHTTP 创建了 HTTP 客户端 client，并且创建了与 localhost:1234 的链接，1234 恰好是 RPC 服务监听的端口。
	client, _ := rpc.DialHTTP("tcp", "localhost:1234")
	var result Result
	// 使用 rpc.Call 调用远程方法，第1个参数是方法名 Cal.Square，后两个参数与 Cal.Square 的定义的参数相对应。
	if err := client.Call("Cal.Square", 15, &result); err != nil {
		log.Fatal("Failed to call Cal.Square. ", err)
	}
	log.Printf("%d^2 = %d", result.Num, result.Ans)
}
*/

func asyncCall() {
	client, _ := rpc.DialHTTP("tcp", "localhost:1234")
	var result Result
	asyncCall := client.Go("Cal.Square", 12, &result, nil)
	log.Printf("%d^2 = %d", result.Num, result.Ans)

	<-asyncCall.Done
	log.Printf("%d^2 = %d", result.Num, result.Ans)
}

func main() {
	asyncCall()
}