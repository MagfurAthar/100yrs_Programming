const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max) +1; 
let guess = prompt("Guess the random number..");

while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    if(guess == random){
        console.log("Conratulations! You are right.");
        console.log("Random number was", random);
        break;
    }else if(guess < random){
        guess = prompt("Ooh!! You are wrong! Your number was too small. Please try again.");
    }else if(guess > random){
        guess = prompt("Ooh!! You are wrong! Your number was too big. Please try again.");
    }

    // else{
    //     console.log("Ooh!! You are wrong! Please try again.");
    //     guess = prompt("Guess the random number..");
    // }

}