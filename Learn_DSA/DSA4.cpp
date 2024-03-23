#include<iostream>
using namespace std;
int main(){

//      Bitwise operator-------------------    
    // int a = 4;
    // int b = 6;
    // cout<<" a&b : "<<(a&b)<<endl;
    // cout<<" a|b : "<<(a|b)<<endl;
    // cout<<" ~a : "<<(~a)<<endl;
    // cout<<" a^b : "<<(a^b)<<endl;

//      Left shift & Right shift-----------
    // cout<<(17>>1)<<endl;
    // cout<<(17>>2)<<endl;
    // cout<<(19<<1)<<endl;
    // cout<<(21<<2)<<endl;

//   increament & decreament operator------
    // int i = 7;
    // cout<<(++i)<<endl;
    // cout<<(i++)<<endl;
    // cout<<(i--)<<endl;
    // cout<<(--i)<<endl;

//    For-loop-----------------------------
    // int n;
    // cout<<"Enter thr value of n : ";
    // cin>>n;
    // for(int i=1; i<=n; i++){
    //     cout<<i<<endl;  
    // }

    // int i=1;
    // for(;;){
    //     if(i<=n){
    //         cout<<i<<endl;
    //     }
    //     else{
    //         break;
    //     }
    //     i++;
    // }

    // for(int p=0 , q=1 , r=2; p<=0 && q<=1 && r<=2; p++ , q++ , r++){
    //     cout<<p<<" "<<q<<" "<<r<<endl;
    // } 

    // int n, sum=0;
    // cout<<"Enter the value of n : ";
    // cin>>n;
    // for(int i=1; i<=n; i++){
    //     sum+=i;
    // }
    // cout<<sum<<endl;

//      Fibonacci Series-----------------------------
    // int a=0, b=1, n;
    // cout<<"Enter the value of n : ";
    // cin>>n;
    // cout<<a<<" "<<b<<" ";
    // for(int i=0; i<=n; i++){
    //     int nextNumber = a+b;
    //     cout<<nextNumber<<" ";
    //     a=b;
    //     b=nextNumber;
    // }

//      Prime number(break statement)----------------
    // int n;
    // cout<<"Enter the value of n : ";
    // cin>>n;
    // bool isPrime=1;
    // for(int i=2; i<n; i++){
    //    if(n%i==0){
    //      isPrime=0;
    //     break;
    //    }
    // }
    // if(isPrime==0){
    //     cout<<n<<" is not a prime number.";
    // }else{
    //     cout<<n<<" is a prime number.";
    // }

//     continue statement------------------------
    // for(int i=0; i<=5; i++){
    //     cout<<"Hi"<<endl;
    //     cout<<"Hello"<<endl;
    //     continue;
    //     // break;
    //     cout<<"are yar reply to kr de..."<<endl;
    // }

//      scope of variables-----------------------
        // int a=3;
        // cout<<a<<endl;
        //  if (true)
        //  {
                // int b=4;
        //     int a=5;
        //     cout<<a<<endl;
        //  }
        //  cout<<a;
        // cout<<b;

//      find the difference b/w product & sum of the digits of the given input.
    // int prod=1;
    // int sum=0;
    // int n;
    // cout<<"Enter the valur of n : ";
    // cin>>n;
    // while (n!=0)
    // {
    //     int digit = n%10;
    //     prod=prod*digit;
    //     sum=sum+digit;
    //     n=n/10;
    // }
    // int diff = prod - sum;
    // cout<<"product of digits = "<<prod<<endl;
    // cout<<"sum of digits = "<<sum<<endl;
    // cout<<"difference b/w prduct and sum of digits = "<<diff;

//  Write a function that takes an unsigned integer and returns the number of '1'bits it has also known as HammingWeight).
    //odubt-----
    // int n, count=0;
    // cout<<"Enter the unsigned integer : ";
    // cin>>n;
    // while (n!=0)
    // {
        // cheking last bit
        // if(n&1){
            // count++;
        // }
        // n=n>>1;
    // }
    // cout<<"Numer of 1 bits = "<<count;  

}