package demo

import (
	"bytes"
	"fmt"
	"strings"
)

// 如何拼接字符串，五种方式

// Splice1 直接使用+符号拼接，效率较低
func Splice1(str1, str2 string) string {
	return str1 + str2
}

// Splice2 使用Sprintf拼接，效率较低
func Splice2(str1, str2 string) string {
	return fmt.Sprintf("%s%s", str1, str2)
}

// Splice3 使用strings.Join函数拼接
func Splice3(str1, str2 string) string {
	return strings.Join([]string{str1, str2}, "")
}

// Splice4 使用bytes.Buffer.WriteString函数拼接
func Splice4(str1, str2 string) string {
	var bf bytes.Buffer
	bf.WriteString(str1)
	bf.WriteString(str2)
	return bf.String()
}

// Splice5 使用strings.Builder.WriteString函数拼接
func Splice5(str1, str2 string) string {
	var builder strings.Builder
	builder.WriteString(str1)
	builder.WriteString(str2)
	return builder.String()
}
