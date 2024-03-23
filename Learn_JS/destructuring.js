// destructuring with array--------------
let names = ["Peter", "Jams", "Tony", "Burak", "Yajuz", "Majuz"];

// let winner = names[0];
// let runnerup = names[1];
// let others = names[2];

let [winner, runnerup, ...others] = names; // here '...others' is the concept of REST
console.log(winner);
console.log(runnerup);
console.log(others);
console.log("--------------------------------------");

// destructuring with objects--------------
let studInfo = {
    name: "Asfaq",
    age: 23,
    course: "B.Tech",
    semester: "3rd",
    subject: ["Python", "DLD", "COA", "Maths", "DSA"],
    username: "@asfaq399",
    password: "pqrs",
    // city: "Ranchi",
};

let {username, password, ...other} = studInfo;
console.log(username);
console.log(password);
console.log(other);

let {course: program, semester: sem, college= "BIT Mesra", city: location="Mumbai"} = studInfo;
console.log(program, sem, college, location);


