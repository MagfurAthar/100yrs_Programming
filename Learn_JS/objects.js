// object -> group of key : value pair
// key : value -> Property
// key : function -> Method
let Stars = {
    FirstName: "Salman",
    LastName: "Khan",
    Address: {
        country: "India",
        State: "Maharashtra",
        City: "Mumbai"
    },
    FamousMovies: ["Ek Tha Tiger", "Tiger Zinda Hai", "Tiger3"],
    Age: 57,
    sayHi: function () {
        console.log("Salman Khan say's Hii");
    }
}
//Get
// console.log("Stars", Stars);
// console.log(Stars.FirstName);
// console.log(Stars.LastName);
// console.log(Stars.Age);
// console.log(Stars.Address);
// console.log(Stars.FamousMovies[1]);
// Stars.sayHi();

// Update age
// Stars.Age = 58;
// console.log(Stars.Age);
// console.log("--------------");
// // Set/Update
// Stars.Friends = ["Shahruk Khan, Saif ALi Khan, Katrina Kaif"];
// console.log(Stars);

// delete
// delete Stars.Address
// console.log("Stars : ", Stars);

// for(let key in Stars){
//     console.log(key, Stars[key]);
// }

// console.log(Stars.Age);
// let propKey = "Address";
// console.log(Stars[propKey]);
// console.log(Stars["Age"]);
// console.log(Stars["Address"]);
// console.log(Stars.xyz);