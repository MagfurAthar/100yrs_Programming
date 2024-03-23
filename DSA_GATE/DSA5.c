// Functions---------
#include<stdio.h>
int fun(int x, int y){
    x=x+y;
    y=x*y;
    return (x,y);
}
int main(){
    int x=4, y=8, z;
    z=fun(x,y);
    printf("%d", z);
}