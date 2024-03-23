let arr = [2, 4, 1, 41, 54, 23, 11, 78, 12, 20];
let evenNums = arr.every((el) => {
    return el % 2 == 0;
});
console.log(evenNums);

// ----------------------------------------------------
let arr2 = [2, 4, 54, 78, 12, 20];
let evenNums2 = arr2.every((el) => {
    return el % 2 == 0;
});
console.log(evenNums2);