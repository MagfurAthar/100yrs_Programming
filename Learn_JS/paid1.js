// // Traffic Light------
// let colour = "yellow";
// // console.log(`Choose a color`);
// if(colour=="red"){
//     console.log("STOP");
// }
// if(colour==="yellow"){
//     console.log("GO SLOW");
// }
// if(colour==="green"){
//     console.log("GO");
// }

// ----------------------------

// // Popcorn Price-------
// let size="XL";
// if(size==='XL'){
//     console.log("RS.250");
// }
// else if(size==='L'){
//     console.log("RS.200");
// }
// else if(size==='M'){
//     console.log("RS.100");
// }
// else if(size==='S'){
//     console.log("RS.50");
// }
// else{
//     console.log("N/A");
// }

// -------------------------------

// Nested if-else--------
// let marks = 31;

// if(!marks<33){

// }
// if((marks>33 && marks<=88) || !false){
//     console.log("Pass");
// }

// if(marks>=33){
//     console.log(`Pass`);
//     if(marks>=80){
//         console.log(`Grade = Ex`);
//     }else{
//         console.log(`Grade = A`);
//     }
//     }
// }else{
//     console.log(`Fail`);
// }
// alert("something is wrong!");
// console.log("This is a simple log.");
// console.error("This is an error msg.");
// console.warn("This is a warning msg.");

// let FirstName = prompt(`Enter your first name : `);
// let LastName = prompt(`Enter your last name : `);
// console.log(` My name is ${FirstName} ${LastName}.`);
// alert(` My name is ${FirstName} ${LastName}.`);

// .trim() method-----------
// let password = prompt("Enter the password");
// let newPass = password.trim();
// console.log(newPass);

// string is immutable------
// let abc = "   Hello  ";
// console.log(abc.trim());
// console.log(abc);

// UperCase & LowerCase-----
// let pqr = "Exception";
// console.log(pqr.toUpperCase());
// console.log(pqr.toLowerCase());

// indexOf()---------
let msg = "Almazlamatuluzma";
console.log(msg.indexOf("iz"));
console.log(msg.indexOf("maz"));
console.log(msg.indexOf("uz"));
// toUpperCase()+trim()---------
let msg1 = "    Tarik   ";
console.log(msg1.trim().toUpperCase());
// .slice()--------
// msg.slice(4);
console.log(msg.slice(-4));
console.log(msg.slice(4));
console.log(msg.slice(4, msg.length));
console.log(msg.slice(14));
// .replace()-------
// msg.replace();
console.log(msg.replace("Al", "Ul"));
console.log(msg.replace("u", "a"));
// .repeat()-------
// msg1.repeat();
console.log(msg1.repeat(3));
console.log(msg.repeat(3));

let msg2 ="  Hello  ";
let msg3 ="pathaanVSjavaan";
console.log(msg2.trim().toLocaleUpperCase());
console.log(msg3.slice(9, 14));
console.log(msg3.slice(9, 15));
console.log(msg3.indexOf("VS"));
console.log(msg3.replace("javaan", "tiger"));
console.log(msg3.slice(9).replace("j", "J"));
let new_msg3 = msg3.replace("javaan", "tiger");
console.log(new_msg3.slice(9).replace("t", "T"));
// new1_msg3 = new_msg3.slice(9).replace("t", "T").replace("t", "T");