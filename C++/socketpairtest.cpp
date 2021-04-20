/**
 *
 * File:    socketpairtest.cpp
 *          Pipe communication using socketpair.
 * 
 * Author:  yiluqingtai(1572236483@qq.com)
 *          Created on 21/4/16
 *          
 **/



#include <stdio.h>
#include <sys/socket.h>
#include <string.h>
#include <unistd.h>

int main(int argc, char* argv[]) {
    int sv[2];
    if (socketpair(AF_UNIX, SOCK_STREAM, 0, sv) < 0) {
        perror("socketpair failed\n");
        return -1;
    }
    pid_t pid = fork();
    if (pid == 0) { // subprocess
        close(sv[0]);
        char *str = "I'm subprocess!\0";
        char buffer[1024] = {0, };
        while (true) {
            if (write(sv[1], str, strlen(str)) < 0) {
                perror("write failed\n");
            }
            sleep(1);
            int len = read(sv[1], buffer, sizeof(buffer));
            if (len < 0) {
                perror("read failed\n");
            }
            buffer[len] = '\0';
            printf("subprocess received: %s\n", buffer);
        }
    } else if (pid > 0) { // mainprocess
        close(sv[1]);
        char *str = "I'm main process!\0";
        char buffer[1024] = {0, };
        while (true) {
            int len = read(sv[0], buffer, sizeof(buffer));
            if (len < 0) {
                perror("read failed\n");
            }
            sleep(1);
            buffer[len] = '\0';
            printf("main process received: %s\n", buffer);      
            if (write(sv[0], str, strlen(str)) < 0) {
                perror("write failed\n");
            }
        }
    }
}