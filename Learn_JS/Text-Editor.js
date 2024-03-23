let inp = document.querySelector('input');
let div = document.querySelector('div');
inp.addEventListener("input", function () {
    div.innerText = this.value;
});