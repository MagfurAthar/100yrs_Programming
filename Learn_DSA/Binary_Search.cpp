#include<iostream>
using namespace std;
 int main(){
    int start=0, end, key;
    int arr[10] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
    int mid = (start + end)/2;
    cout<<"Enter the element you have to find : ";
    cin>>key;
    while (start<end)
    {
      if(arr[mid]==key){
         cout<<"The element found at index "<< mid;
      }
      if(key<arr[mid]){
         end = mid-1;
      }else{
         start = mid+1;
      }
      mid = (start + end)/2;
    }
    return 0;
 }
