// # 567 = 5 + 6 + 7 = 18
# include<stdio.h>
int main(void) {
    int num = 567, sum = 0;

    while (num != 0) {
        sum += num % 10;
        num /= 10;
    }
    printf("num = %d", sum);
    return 0;
}