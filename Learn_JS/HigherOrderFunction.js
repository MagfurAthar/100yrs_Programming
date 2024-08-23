let multipleGreet = function (func, count) { // Higher Order Function---
    for (let i = 0; i < count; i++) {
        func();
    }
}
let count = 1;
let Greet = function () {
    console.log(`${count}) The Great Otoman Ampire.`);
    count++;
}

multipleGreet(Greet, 20);