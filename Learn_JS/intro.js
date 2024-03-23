//print
// console.log("Hello world");
//declare variable
//undefined
// let a = 10;
// a = 10.1;
// a = "Hello I am a string";
// a = "Hello I am also a string";
// console.log(a);
// console.log("variable contains", a);
//variable types : Primitive types: number, string, booleans, symbol, null;
// a = true;
// a = null;
// console.log("A gives a value", a);
// let num=10;
// for(let i=1; i<=num; i++){
//     console.log("The numbers is : ", i);
// }
let num = 23;
let flag = true;
for(let div=2; div < num; div++){
    if(num%div==0){
        flag=false;
        break;
    }
}
if(flag=true){
    console.log(num, " is prime.");

}else{
    console.log(num, " is not prime.");
}