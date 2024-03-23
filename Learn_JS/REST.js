// REST -------------------------------------------
function sum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us:", args[i]);
    }
}
console.log(sum(1));
console.log(sum(1, 2, 3, 4, 5, 6, 7));


function min(a, b, c, d){
    console.log(arguments);
    console.log(arguments.length); //here arguments is not an array--
    // console.log(arguments.push(5)); //it is actually a collection---------
}
min(1, 2, 4, 3);

// ---------------------------------------
function sum1(...args){
    return args.reduce((sum, el) => sum+el);
}
console.log(sum1(1, 2, 3, 4, 5));
console.log(sum1(121, 212, 323, 44, -5));
// ---------------------------------------



// ---------------------------------------
function min(msg, ...args){ //here 'msg' is a normal parameter--------
    console.log(msg);
    return args.reduce((min, el) => {
        if(min<el){
            return min;
        }else{
            return el;
        }
    })
};
console.log(min("Smallest number b/w elements is :", 12, 3, 2, 4, 7, 6, 18, 9, 0, 1, 5, 8));
// ---------------------------------------
