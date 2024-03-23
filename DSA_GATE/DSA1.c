#include<stdio.h>
#include<conio.h>
#include<math.h>
void main(){
    // printf("Hello World");
    int a, b, c;
    printf("Enter the value of a, b, c : ");
    scanf("\n%d%d%d", &a,&b,&c);
    if(!((a>b)&&(b<c))){
        printf("The statement is true");
    }
    else
    printf("Statement is not true");
    int x=a&b;
    int y=a|b;
    int z=a^b;
    printf("\nBitwise AND : %d",x);
    printf("\nBitwise OR : %d",y);
    printf("\nBitwise XOR : %d",z);
    int p=a<<b;
    int q=a>>b;
    printf("\nLeft shift : %d", p);
    printf("\nRight shift : %d", q);
    float C = 4.2;
    float F = 3.9;
    printf("\nCeiling : %f", ceil(C));
    printf("\nFloor :%f", floor(F));

}