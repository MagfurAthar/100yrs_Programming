// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function(){
//     alert("Button was clicked");
//     console.log("Button was clicked");
// }

// another method------------------------
// function click() {
//     console.log("Button was clicked");
//     alert("Button was clicked");
// }
// btn.onclick = click;

// For multiple buttons------------------
let btns = document.querySelectorAll("button");
function click() {
    alert("Button was clicked");
    console.log("Button was clicked");
}
for (btn of btns) {
    btn.onclick = click;
    btn.onmouseenter = function () {
        console.log("Button was hovered");
    }
}
