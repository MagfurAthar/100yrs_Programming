// we can use Methods as 'key: value' pairs---------------
// let Calculator = {
//     add: function(a, b){
//         return a+b;
//     },
//     sub: function(a, b){
//         return a-b;
//     },
//     mul: function(a, b){
//         return a*b;
//     },
//     div: function(a, b){
//         return a/b;
//     }
// };
// console.log(Calculator.add(2, 5));
// console.log(Calculator.sub(2, 5));
// console.log(Calculator.mul(2, 5));
// console.log(Calculator.div(2, 5));

// or we can use Methods like this-----------
let Calculator = {
   add(a, b){
        return a+b;
    },
    sub(a, b){
        return a-b;
    },
    mul(a, b){
        return a*b;
    },
    div(a, b){
        return a/b;
    }
};
console.log(Calculator.add(2, 5));
console.log(Calculator.sub(2, 5));
console.log(Calculator.mul(2, 5));
console.log(Calculator.div(2, 5));