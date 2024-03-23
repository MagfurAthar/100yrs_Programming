let age = prompt("Enter your age : ");

// Function declaration-----------
function isAdult(){
    if(age >= 18){
        console.log(`You are eligible for vote.`);
    }else{
        console.log(`You are not eligible for vote.`);
    }
}

isAdult(); //Function Calling-----

// --------------------------------------
// RollDice-----------
// function rollDice() {
//     let random = Math.floor(Math.random()*6)+1;
//     console.log(random);
// }

// rollDice();

// -------------------------------------
// function studInfo(name, age, city){
//     console.log(`${name}'s age is ${age}. She is from ${city}.`);
// }
// studInfo("Aarfa", 24, "Mumbai");
// studInfo("Afsana", 21, "Sirinagar");
