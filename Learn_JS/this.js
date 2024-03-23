const Marks = {
    name: "Sadaab",
    eng: 67,
    math: 98,
    phy: 78,
    chem: 81,
    getAvg() {
        console.log(this);
        let AvgMarks = (this.eng + this.phy + this.math + this.chem) / 4;
        console.log(`${this.name} got average marks = ${AvgMarks}`);
    }
}
Marks.getAvg();

// function getAvg(){
//     console.log(this);
// }
// getAvg();

// ---------------Arrow Functions-----------------
const Sum = (a, b) => {
    console.log(`Sum of ${a} and ${b} = ${a + b}`);
}
Sum(105, 210);


// const cube = (n) => {    --->paranthesis-->() is optional
const cube = n => {  // We can write like this-----------
    return n * n * n;
}
console.log(`Cube of ${5} is = ${cube(5)}`);


// -----------------------------------
const power = (n, m) => {
    return n ** m;
}
console.log(power(5, 2));

// -----------------------------------
let hello = () => {
    console.log("hello! Good Morning");
}
console.log(hello());


// implicit return------------- 
const mul = (a, b) => (a * b);
console.log(mul(2, 7));



// setTimeout function------------------------
console.log("Hi Everyone!");
setTimeout(()=>{
    console.log(`Barasat.`)
}, 4000);
console.log(`Welcome to`);