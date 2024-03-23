//Non-Primitive => array, objects, function
// //function definition
// function sayHi(param) {
//     console.log("-------------------");
//     console.log(param);
//     let rVal = Math.random() > 0.5 ? true : "Less then 0.5";
//     // return "Return from a function";
//     return rVal;
// }
// sayHi(10);
// sayHi("Hello");
// sayHi([2, 3, 5, 7, 11, 13, 17, 19]);
// let returnVal = sayHi([2, 3, 5, 7, 11, 13, 17, 19]);
// console.log("retun", returnVal);
// let rVal = 2;
// console.log("rVal", rVal);

// ----------------------------------------
// function sum(a, b){
//     return a+b;
//     console.log("Sum of two numbers"); //Unreachable code detected---
// }
// let Sum = sum(sum(10, 20), 30);
// console.log(Sum);
// let Add = sum(10, 20);
// console.log(Add);

// -------String Concatination--------------
// let str = ["Sahil", "Adeem", "Abbasi"];
// function concat(str){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));

// ------Global VS Function variable scope--------
function scope(a, b){
    let sum = a+b; //Function scope-----
    console.log(sum);
}
let sum = 54; //Global variable------
console.log(scope(10, 5));
console.log(sum);



