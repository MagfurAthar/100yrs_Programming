async function greet() {
    // throw "404 not found"; // it throws an error of rejection-------
    return "Hello";
};

greet()
    .then((result) => {
        console.log("Promises was resolved");
        console.log("result was : ", result);
    })
    .catch((error) => {
        console.log("Promises was rejected with err : ", error);
    })



//'async' arrow function -----
let demo = async () => {
    return 5;
};
let result = demo();
console.log(result);