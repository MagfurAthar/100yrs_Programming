// let n = 5;
// console.log("Welcome to Nodejs");
// for (let i = 0; i < n; i++) {
//     console.log("Hello, ", i);
// }
// console.log("Bye Bye Nodejs");

// console.log(process.argv);

let args = process.argv;
for (let i = 0; i < args.length; i++) {
    console.log(`Welcome to `, args[i]);
}