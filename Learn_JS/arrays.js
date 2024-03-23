// array decare
// let arr = [];
// let array = [1, 2, 3, 4, 5, 6];
// console.log(array);
// console.log(array.length);

// let i = 0;
// while (i < array.length) {
//     console.log("Element of index ", i, " is ", array[i]);
//     i++;
// }

// push, unshift, pop, shift-->
// array.unshift("1st value");
// array.push('Last value');
// console.log("----------------------");
// console.log(array);
// console.log("----------------------");
// array.pop();
// array.shift();
// console.log(array);

// slice, splice-->
// let partOfAnArray = array.slice(2, 5);
// console.log(partOfAnArray);
// console.log("----------------------");
// array.splice(2,2);
// console.log(array);
// Try later----------
// indexOf/contain-->
// array.indexOf(-1);
// console.log(array);


// let fruits = ["Mango", "Govava", "Banana", "Lichy", "Orange"];
// let addFruits = fruits.push("Pineapple");
// for(let i=0; i<fruits.length; i++){
//     console.log(i+1,"-->", fruits[i]);
// }

// Nested loop with nested array-------------
// let Heroes = [["Umar", "Abubakar", "Usman", "Khalid-ibn-waleed"],
// ["Ertugrul", "Bamsy-bey", "Turghut-bey", "Arsalan"]];
// for(let i=0; i<Heroes.length; i++){
//     for(let j=0; j<Heroes[i].length; j++){
//         console.log(`j = ${j}, ${Heroes[i][j]}`);
//     }
// }

let student_info = [["Aquib", 9.45], ["Magfur", 8.77], ["Wakar", 9.65]];
for (let i = 0; i < student_info.length; i++) {
    console.log(`Student info of #1`);
    for (let j = 0; j < student_info[i].length; j++) {
        console.log(`${student_info[i][j]}`);
    }
}
console.log("---------------------------------------");

// 'for of' loop-----------------
let fruits = ["Mango", "Litchi", "Banana", "Govava", "Orange"];
for (fruit of fruits) {
    console.log(fruit);
}
console.log("---------------------------------------");

for (char of "Xavier's college") {
    console.log(char);
}
console.log("---------------------------------------");

// Nested 'for of' loop-----------------
let Heroes = [["Umar", "Abubakar", "Usman", "Khalid-ibn-waleed"],
["Ertugrul", "Bamsy-bey", "Turghut-bey", "Arsalan"]];
for (list of Heroes) {
    for (hero of list) {
        console.log(hero);
    }
}