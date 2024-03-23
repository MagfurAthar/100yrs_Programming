let btns = document.querySelectorAll("button");


for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayHi; //not possible to execute both the functions bu 'onclick' method.


    btn.addEventListener("click", sayHello); //Execute both the fuctions by a button click. 
    btn.addEventListener("click", sayHi); // Execute both the fuctions by a button click.
    
    // Double click event-------------------------
    // btn.addEventListener("dblclick", function () {
    //     console.log("Button was double clicked.");
    // });
}
function sayHello() {
    alert("Say Hello");
}
function sayHi() {
    alert("Say Hi");
}
