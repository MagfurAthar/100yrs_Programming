function average(a, b, c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

average(10, 20, 30);
average(15, 40, 35);
// --------------------------------------------
function table(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
table(2);
console.log("-----------------");
table(3);
console.log("-----------------");
table(4);
console.log("-----------------");
table(5);
console.log("-----------------");
table(17);

// -------------------------------------------
let sum = function(a, b){
    return a+b;
}
console.log(sum(10, 20));
let add = sum(sum(10, 20), 30);
console.log(add);

// -------------------------------------------
let hello = function(){
    console.log("Hello");
}
console.log(hello());

hello = function(){
    console.log("Hii");
}
console.log(hello());