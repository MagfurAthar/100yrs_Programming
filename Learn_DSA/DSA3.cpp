#include<iostream>
using namespace std;
int main(){

// patern-------------------
    // int n, i=1;
    // cout<<"Enter the rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //      while (j<=n)
    //      {
    //         cout<<" * ";
    //         j++;
    //      }
    //      cout<<endl;
    //      i++;
         
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=n)
    //     {
    //         cout<<i<<" ";
    //         // cout<<j<<" ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i++;
    // }

    // int n, i=0;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=n)
    //     {
    //         cout<<n-j+1<<" ";
    //         j++;
    //     } 
    //     cout<<endl;
    //     i++;
    // }

    // int n, i=1;
    // int count=0;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=n)
    //     {
    //         count=count+1;
    //         cout<<count<<"    ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i++;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=i)
    //     {
    //         cout<<" * ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i=i+1;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=i)
    //     {
    //         cout<<i<<" ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i=i+1;
    // }
    
    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // int count = 1;
    // while (i<=n)
    // {
    //     int j=1;
        
    //     while (j<=i)
    //     {
    //         cout<<count<<" ";
    //         count=count+1;
    //         j++;
    //     }
    //     cout<<endl;
    //     i++;
        
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int count = i;  
    //     int j=1;
    //     while (j<=i)
    //     {
    //         cout<<count<<" ";
    //         count = count+1;
    //         j++;
    //     }
    //     cout<<endl;
    //     i++;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int count=i;
    //     int j=1;
    //     while (j<=i)
    //     {
    //         cout<<count<<"  ";
    //         count--;
    //         j++;
    //     }
    //     i++;
    //     cout<<endl;
    // }

    // OR

    // int n, i=1;
    // cout<<"Enter the number of rows : "; 
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=i)
    //     {
    //         cout<<(i-j+1)<<" ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i++;
    // }  

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // char ch = 65;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=n)
    //     {
    //         cout<<ch<<"   ";
    //         j++; 
    //     }
    //     cout<<endl<<endl;
    //     ch++;
    //     i++;
    // }

    // OR

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=n)
    //     {
    //         char ch = 'A'+i-1;
    //         cout<<ch<<" ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i++;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=n)
    //     {
    //         char ch = 'A'+j-1;
    //         cout<<ch<<" ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i++;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // char ch = 'A';
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=n)
    //     {
    //         cout<<ch<<" ";
    //         ch=ch+1;
    //         j++;
    //     }
    //     cout<<endl;
    //     i = i+1;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=n)
    //     {
    //         char ch = 'A'+i+j-2;
    //         cout<<ch<<" ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i=i+1;
    // }

    // int n, row=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (row<=n)
    // {
    //     int colm=1;
    //     while (colm<=row)
    //     {
    //         char ch =('A'+row-1);
    //         cout<<ch<<" ";
    //         colm++;
    //     }
    //     cout<<endl;
    //     row=row+1;
    // }

    // int n, row=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    //     char ch='A';
    // while (row<=n)
    // {
    //     int colm=1;
    //     while (colm<=row)
    //     {
    //         cout<<ch<<" ";
    //         colm = colm + 1;
    //         ch = ch+1;
    //     }
    //     cout<<endl;
    //     row = row + 1;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=i)
    //     {
    //         char ch = ('A'+i+j-2);
    //         cout<<ch<<" ";
    //         j=j+1;

    //     }
    //     cout<<endl;
    //     i++;
    // }
    
    // int n, i=1;
    // cout<<"Enter the numbwer of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<=i)
    //     {
    //         char ch = ('A'+n-i+j-1);
    //         cout<<ch<<" ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i = i+1;
    // }

    // OR

    // int n, i=1;
    // cout<<"Enter the numbwer of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     char ch = ('A'+n-i);
    //     while (j<=i)
    //     {
    //         cout<<ch<<" ";
    //         ch = ch+1;
    //         j=j+1;
    //     }
    //     cout<<endl;
    //     i = i+1;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int space = n-i;
    //     while (space)
    //     {
    //         cout<<" ";
    //         space--;
    //     }
    //     int j=1;
    //     while (j<=i)
    //     {
    //         cout<<"*";
    //         j++;
    //     }
    //     cout<<endl;
    //     i++;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int stars = n-i+1;
    //     while (stars)
    //     {
    //         cout<<"*";
    //         stars--;
    //     }
    //     int j=1;
    //     while (j<=i)
    //     {
    //         cout<<" ";
    //         j++;
    //     }
    //     cout<<endl;
    //     i++;
    // }

    // int n, i=1;
    // cout<<"Enter the number of rows : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     while (j<i)
    //     {
    //         cout<<" ";
    //         j++;
    //     }
    //     int stars = n-i+1;
    //     while (stars)
    //     {
    //         cout<<"*";
    //         stars--;
    //     }
    //     cout<<endl;
    //     i++; 
    // }

    // int n, i=1;
    // cout<<"Enter the input : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     //print the space first----
    //     int space = n-i;
    //     while (space)
    //     {
    //         cout<<"  ";
    //         space--;
    //     }
    //     // 1st trigle----------
    //     int j=1;
    //     while (j<=i)
    //     {
    //     int count = j;
    //         cout<<count<<" ";
    //         count++;
    //         j++;
    //     }
    //     //2nd tringle---------
    //     int start = i-1;
    //     while (start)
    //     {
    //         cout<<start<<" ";
    //         start--;
    //     }
    //     cout<<endl;
    //     i++;
    // }

    // int n, i=1;
    // cout<<"Enter the input : ";
    // cin>>n;
    // while (i<=n)
    // {
    //     int j=1;
    //     int space = n-i;
    //     while (space)
    //     {
    //         cout<<"  ";
    //         space = space-1;
    //     }
    //     while (j<=i)
    //     {
    //         cout<<j<<" ";
    //         j++;
    //     }
    //     int start = i-1;
    //     while (start)
    //     {
    //         cout<<start<<" ";
    //         start--;
    //     }
    //     cout<<endl;
    //     i++;    
    // }

}