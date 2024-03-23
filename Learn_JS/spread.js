let arr = [12, 5, 6, 2, 3, 8, 7, 10, -10, 11];
console.log(arr);
console.log(...arr);
let min = Math.min(...arr);
console.log(min);
let max = Math.max(...arr);
console.log(max);

let str = "Brainware University";
console.log(...str);
let newStr = [...str];
console.log(newStr);
newStr.push(..." Barasat");
console.log(...newStr);

// ---------------------------------------
let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let nums = [...odd, ...even];
console.log(nums);
console.log(...nums);
// ---------------------------------------
const data = {
    email: "abcdefgh399@gmail.com",
    password: "abcd786"
};
console.log(data);
const dataCopy = {...data, id: 123, country: "Russia"};
console.log(dataCopy);

let arr1 = [1, 2, 3, 4, 5];
let obj1 = {...arr1};
console.log(obj1);
let obj2 = {..."hello"};
console.log(obj2);
