// // setTimeout VS setInterval------------------------
// console.log(`Start coding`);
// setTimeout ( ()=>{
//     console.log(`console the code..`);
// }, 4000);
// console.log(`Stop coding`);


// let id = setInterval( ()=>{
//     console.log(`Check the syntax first`);
// }, 1000);
// // clearInterval(id);


// Q)Write a function that prints "Hello World" 5 times at intervals 2s each.
let id3 = setInterval(()=>{
    console.log(`Hello World`);
}, 2000);
setTimeout(() => {
    clearInterval(id3);
    console.log(`clear interval run`);
}, 11000);