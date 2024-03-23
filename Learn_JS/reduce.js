// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reduce((AC, el) => (AC+el)));

// -------------------------------
// let Num = [1, 4, 2, 3, 7, 10, 8, 9, 5, 6];
// let finalVal = Num.reduce((res, el) => {
//     console.log(res);
//     return res+el;
// });
// console.log("-------------------------");
// console.log(`Final Value = ${finalVal}`);

// Q) Find maximum in an array:----------------------
// let arr1 = [1, 0, 3, 17, 41, 80, 61, 30];
// let max = 0;
// for (let i = 0; i < arr1.length; i++) {
//     if (max < arr1[i])
//         max = arr1[i];
// }
// console.log(max);

// By using reduce method----------------------------
let arr2 = [1, 0, 3, 17, 41, 80, 61, 30];
let maxm = arr2.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(maxm);

// Q) Create a function to find the minimum number of an array----------
let arr3 = [16, 6, 5, -10, 41, 34, 21, 2, 8];
let minm = arr3.reduce((min, el) => {
    if (min < el)
        return min;
    else
        return el;
});
console.log(minm);

// or---------------------
function getMinm(nums) {
    let minm = nums.reduce((min, el) => {
        if (min < el)
            return min;
        else
            return el;
    });
    return minm;
}
let nums = [16, 6, 5, 41, 34, 21, 2, 8];
console.log(getMinm(nums));