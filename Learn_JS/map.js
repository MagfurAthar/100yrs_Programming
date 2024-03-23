// map function stores the returned value in a new array------- 
let arr = [1, 2, 3, 4];
let double = arr.map((el) => {
    return el * 2;
});
console.log(double);

let students = [
    {
        name: "Ayan",
        marks: 78,
        rank: 15
    },
    {
        name: "Sameer",
        marks: 90,
        rank: 5,
    },
    {
        name: "Magfur",
        marks: 91,
        rank: 4,
    }
];

let gpa = students.map((el) => {
    return el.marks / 10;
});
console.log(gpa);