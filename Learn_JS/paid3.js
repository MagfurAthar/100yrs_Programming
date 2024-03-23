// Array References--------------
//  let arr = ['a', 'b', 'c'];
//  let arrCopy = arr;
//  console.log(arrCopy);
//  arrCopy.push('d');
//  console.log(arr);
//  arr.pop();
//  console.log(arrCopy);
//  console.log(arrCopy===arr);
//  console.log(arrCopy==arr);

// Constant Array----------------
const arr1 = ['1', '2', '3', '4'];
console.log(arr1);
arr1.push('5');
console.log(arr1);
console.log(arr1.splice(0, 2));
console.log(arr1);
// arr1 = ['5', '6']; //can't be possible because arr1 is constant.

// Nested Array------------------
let Num = [[1, 2], [3, 4], [5, 6]];
console.log(Num);
console.log(Num.length);
console.log(Num[0]);
console.log(Num[0][0]);
console.log(Num[0][1]);
console.log(Num[2][1]);
console.log(Num[2][2]); //undefined:

// Tic-To Game-------------------
let Game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(Game);
console.log(Game[0][1]);