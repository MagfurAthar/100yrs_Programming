// let i=1;
//  while(i<=10){
//     console.log(i);
//     i++;
//  }
// console.log(`----------------------`)
//  let j=1;
//  while(j<=10){
//     console.log(j);
//     j+=2;
//  }

// Favorite Movie-----
// const favorite_Movie = "Pk";
// let guess = prompt(`Guess my favorite movie : `);
// while ((guess != favorite_Movie) && (guess != 'quite')) {
//    guess = prompt(`Wrong guess. Please try again.`);
// } 
// if(guess == favorite_Movie){
//    console.log(`Congratulations!`);
// }else{
//    console.log(`You quite..`);
// }

// or another way---------
const favorite_Movie = "Pk";
let guess = prompt(`Guess my favorite movie : `);
while (guess != favorite_Movie) {
   if (guess == 'quite') {
      console.log(`You quite..`);
      break;
   }
   guess = prompt(`Wrong guess. Please try again.`);
}
if (guess == favorite_Movie) {
   console.log(`Congratulations!`);
}