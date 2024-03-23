let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log("Form submited");
    // let user = document.querySelector('#user');
    // let pass = document.querySelector('#pass');
    // console.dir(user);
    // console.log(user.value);
    // console.log(pass.value);
    // alert(`Hi ${user.value}, your password is ${pass.value}.`);

    // or--------
    console.dir(form);
    let user = this.elements[0]; // or form.elements[0];
    let pass = this.elements[1]; // or form.elements[1];
    alert(`Hi ${user.value}, your password is ${pass.value}.`);

    // -----------------------------------------------

});
let user = document.querySelector("#user");
user.addEventListener("change", function () {
    console.log("Changed event :");
    console.log("Final value", user.value);
});
user.addEventListener("input", function () {
    console.log("Input event :");
    console.log("Final value", this.value);
});
