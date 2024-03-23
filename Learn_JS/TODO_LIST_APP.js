let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let ul = document.querySelector('#ul');
btn.addEventListener("click", function () {
    let item = document.createElement('li');
    let delBtn = document.createElement('button');
    delBtn.classList.add("delete");
    delBtn.innerText = "Delete";
    item.innerText = input.value;
    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
});

// let delBtns = document.querySelectorAll('.delete');
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let parent = this.parentElement;
//         parent.remove();
//     });
// }

ul.addEventListener("click", function (event) {
    // console.log(event.target);
    // console.dir(event.target.nodeName);
    if (event.target.nodeName === 'BUTTON') {
        // event.target.parentElement.remove();
        let ListItem = event.target.parentElement;
        ListItem.remove();
    }
})

