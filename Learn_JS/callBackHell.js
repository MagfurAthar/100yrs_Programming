h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColor) nextColor();
//     }, delay);

// }
// callBack nesting ----> "CallBack Hell"---------------
// changeColor("red", 2000, () => {
//     changeColor("yellow", 2000, () => {
//         changeColor("green", 2000, () => {
//             changeColor("blue", 2000);
//         })
//     })
// })



// Using promises method--------------------------------
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed");
            // if (nextColor) nextColor();
        }, delay);
    })
}

changeColor("Red", 2000)
    .then(() => {
        console.log("Color was changed to red");
        return changeColor("Yellow", 2000);
    })
    .then(() => {
        console.log("Color was changed to yellow");
        return changeColor("Green", 2000);
    })
    .then(() => {
        console.log("Color was changed to green");
        return changeColor("Blue", 2000);
    })
    .then(() => {
        console.log("Color was changed to blue");
    });
// .catch(()=>{
//     console.log("Color was changed to blue");

// })
// ----------------------------Note:-----------------------------
// since the above code will not be rejected in general.
// so we can ignore the decalaration of .catch() block----------