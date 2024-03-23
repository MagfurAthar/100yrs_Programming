// function OuterFunc(){
//     let a = 10; 
//     let b = 20;
//     function InerFunc(){
//         console.log(a);
//         console.log(b);
//     }
//     InerFunc();
// }
// OuterFunc();


// Function Expression------------
let Sum = function(a, b){
    return a+b;
}
console.log("Sum = ", Sum(10, 14));