let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let para1 = document.querySelector('#para');
let para = document.querySelector('p');


function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "rgb(28, 140, 220)";
    this.style.color = "white";

}
para1.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);


// para1.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "yellow";
// });
// h1.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
//     this.style.color = "white";
// });
// h3.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "yellow";
// });
// para1.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "yellow";
// });
para.addEventListener("click", function () {
    console.log("Paragraph was clicked.");
});

let box = document.querySelector('.box');
box.addEventListener("mouseenter", function () {
    console.log("Box has hovered.");
});

// --------------'Event' Argument-----------------------------------------
let btn = document.querySelector('#clk-btn');
btn.addEventListener("click", function (e) {
    console.log(e);
    console.log("button clicked");
})
btn.addEventListener("dblclick", function (e) {
    console.log(e);
    console.log("button double clicked");
})

let keys = document.querySelector('#keys');
keys.addEventListener("keydown", function (event) {
    // ArrowUp, ArrowDown, ArrowLeft, ArrowRight----------
    //or...ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)----------
    if (event.code == "ArrowUp") {
        console.log("Code = ", event.code);
        console.log("Character Move Forward");
    } else if (event.code == "ArrowDown") {
        console.log("Code = ", event.code);
        console.log("Character Move Downward");
    } else if (event.code == "ArrowLeft") {
        console.log("Code = ", event.code);
        console.log("Character Move Left");
    } else if (event.code == "ArrowRight") {
        console.log("Code = ", event.code);
        console.log("Character Move Right");
    } else {
        console.log("No any movement.");
    }
});

let inp = document.querySelector('#inp');
inp.addEventListener("keyup", function (event) {
    console.log("Key = ", event.key);
    console.log("Code = ", event.code);
    console.log("Key was pressed.");
});
