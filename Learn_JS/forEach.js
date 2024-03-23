let arr = [10, 20, 30, 40, 50];
// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);

// or------
// arr.forEach(function(el){
//     console.log(el);
// });
// or------
arr.forEach((el) => {
    console.log(el);
});
console.log("--------------------------")
//-------------------------------------------------
let StudInfo = [{
    name: "Ayan",
    marks: 18,
    rank: 15
},
{
    name: "Sameer",
    marks: 20,
    rank: 5,
},
{
    name: "Magfur",
    marks: 20,
    rank: 4,
}
];

StudInfo.forEach((Info) => {
    console.log(`Marks = ${Info.marks}`);
})