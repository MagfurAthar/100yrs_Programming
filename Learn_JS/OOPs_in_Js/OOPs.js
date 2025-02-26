let arr1 = [1, 2, 3, 4, 5];
arr1.hello = () => {
    console.log("Hello"); // arrow function
}
arr1.hello(); // Hello

let arr2 = [1, 2, 3];
arr2.hello = function () {
    console.log("Hello"); // normal function
}