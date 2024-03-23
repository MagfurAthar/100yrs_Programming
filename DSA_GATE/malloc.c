// malloc function----------------------------
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
void main(){
    char choice;
    printf("You want to create a variable? -> Y for yes : \n");
    scanf("%c", &choice);
    int *p = (int *)malloc(sizeof(int));
    *p = 5;
    printf("%d", *p);
}