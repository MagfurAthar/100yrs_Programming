
let student = {
    name: "Muzammil",
    age: 21,
    status: "Bachelor",
    prop: this, //globle scope---------
    getName: function () {
        console.log(this); // object scope----------
        return this.name;
    },
    getMarks: () => {
        console.log(this); //globle scope of its parent's object ->Window-----
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student object
        }, 2000)
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //window
        }, 2000)
    }

};
// console.log(student.getName());

// -------------------------------------------------------



// const getSquare = (n) =>{
//     let square = n*n;
//     return square;
// }
// console.log(getSquare(4)); 
// or 
// const getSquare = (n) => n*n;
// or
const getSquare = n => n*n;
console.log(getSquare(4));
