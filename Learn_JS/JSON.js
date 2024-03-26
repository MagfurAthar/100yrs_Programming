let JSON_Respnse = '{"fact":" A cat only has the ability to move their jaw up and down, not side to side like a human can.","length":93}'
console.log(JSON_Respnse);

let JSON_object = JSON.parse(JSON_Respnse); //JSON data to JSON object
console.log(JSON_object);

let student = {
    name: "Sameer Salam",
    roll: 281,
    sec: 'E'
}
console.log(student);
let JSON_Request = JSON.stringify(student); //JSON object to JSON data
console.log(JSON_Request);
