h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor();
    }, delay);

}
// callBack nesting ----> "CallBack Hell"---------------
changeColor("red", 2000, () => {
    changeColor("yellow", 2000, () => {
        changeColor("green", 2000, () => {
            changeColor("blue", 2000);
        })
    })
})