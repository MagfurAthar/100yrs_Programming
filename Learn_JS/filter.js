// filter function return the filtered elements from the given array as per conditions. 
let numbers = [2, 4, 1, 41, 54, 23, 11, 78, 12, 20];

let evenNums = numbers.filter((num) => {
    return num % 2 == 0;
});
console.log(evenNums);