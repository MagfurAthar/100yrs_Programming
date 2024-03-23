#include<stdio.h>
void main(){
    // int a = 10;
    // printf("%d", &a);
    // printf("%x", &a);
    // printf("%u", &a);
// -------------------------------
    // char *cp;
    // int *ip;
    // float *fp;
    // printf("%d", sizeof(cp));
    // printf("%d", sizeof(ip));
    // printf("%d", sizeof(fp));
// -----------------------------------
    // int *ip;
    // char *cp;
    // float *fp;
    // printf("%d ", ip);
    // ip = ip+2;
    // printf("%d", ip);

    // printf("%d ", cp);
    // cp = cp+2;
    // printf("%d", cp);

    // printf("%d ", fp);
    // fp = fp+1;
    // printf("%d", fp);
// -----------------------------------
    // int **p;
    // int a = 5;
    // int *ap;
    // ap = &a;
    // p = &ap;
    // printf("%d", p);
    // printf("\n%d", *p);
    // printf("\n%d", **p);

    // int a = 5;
    // int *p;
    // p = &a;
    // printf("%d", a);
    // printf("\n%u", &a);
    // printf("\n%u", p);
    // printf("\n%d", *p);

    // int i=0;
    // if(i==2) printf("This is else");
    // else printf("This is if");
    // printf("%d", i);    

    int a = 12;
    switch(a){
        case 11:a++;
        case 12:a--;
        case 13:a=a+1;
        default:a=27;
    }
    printf("%d", a);
}
