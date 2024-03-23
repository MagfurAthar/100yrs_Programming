// let str = 'apple';
//  if((str[0]==='a')&&(str.length>3)){
//     console.log(`${str} is a good string.`);
//  }
//  else{
//     console.log(`${str} is not a good string`);
//  }

// ------------------------------

// Predict the output of the following QS:-
// let num = 12;
// if((num%3===0)&&((num+1==15)||(num-1==11))){
//     console.log("safe");
// }
// else{
//     console.log("unsafe");
// }

// ------------------------------

// truthy and falsy:-
// if(0){} -> false value
// if(null){} -> false value
// if(undefined){} -> false value
// if(""){} -> false value
// if(" "){} -> true value
// if(NaN){} -> false value
// if(true){
//     console.log("It is a true value.");
// }
// else{
//     console.log("It is a false value.");
// }

// ----------------------------

// let string = "";
// if(string){
//     console.log("String is not empty.");
// }else{
//     console.log("String is empty.");
// }

// ---------------------------

// let num = -10;
// let num = 0;
// if(num){
//     console.log("Num is not equal to zero.");
// }else{
//     console.log("Num is equal to zero.");
// }

// let color = "yellow";
// switch (color) {
//     case "red":
//         console.log(`Stop`);
//         break;
//     case "yellow":
//         console.log(`Slow Down`);
//         break;
//     case "green":
//         console.log(`Go`);
//         break;
//     default:
//         console("Light is broken");
// }
// console.log(`Statement after switch statement.`);

// let day = 1;
// switch (day) {
//     case 1:
//         console.log(`Monday`);
//         break;
//     case 2:
//         console.log(`Tuesday`);
//         break;
//     case 3:
//         console.log(`Wednesday`);
//         break;
//     case 4:
//         console.log(`Thursday`);
//         break;
//     case 5:
//         console.log(`Friday`);
//         break;
//     case 6:
//         console.log(`Satarday`);
//         break;
//     case 7:
//         console.log(`Sunday`);
//         break;
//     default:
//         console("Not a day");
// }
// console.log(`Day of judgement!!`);

// Arrays-------------------------
// let a = "Tiger";
// let b = "Pathaan";
// let c = "Javaan";

let Actors = ["Tiger", "Pathaan", "Javaan", "Kabeer", "Khalid"];
console.log(Actors);
let nums = [2, 3, 4, 5];
console.log(nums);
console.log(nums[2]);
console.log(typeof nums); //Arrays are of 'object' type in javaScript.
let info = ["Magfur", 21, 2001];
console.log(info);
console.log(info.length);
let emptyArr = [];
console.log(emptyArr);
console.log(emptyArr.length);
console.log([1, 2, 3, 4, 5].length);
console.log(info[0]);
console.log(info[0][0]);
console.log(info[0][1]);

// Arrays are Mutable---------------
// let fruit = ["Mango", "Apple", "Govava"];
// console.log(fruit); 
// fruit[0] = ["Banana"];
// console.log(fruit); 
// fruit[1] = ["Pineapple"];
// console.log(fruit); 
// fruit[10] = ["Watermelon"];
// console.log(fruit); 
// console.log(fruit[5]); //Undefined

//    Array Methods-> Push, Pop, Unshift, Shift etc.
// let SPY_Universe = ["Tiger", "Pathaan"];
// SPY_Universe.push("Kabeer", "Khalid");
// console.log(SPY_Universe);
// // console.log(SPY_Universe[2]);
// SPY_Universe.pop();
// console.log(SPY_Universe);
// SPY_Universe.unshift("Salman");
// console.log(SPY_Universe);
// SPY_Universe.unshift("SRK");
// console.log(SPY_Universe);
// SPY_Universe.shift("SRK");
// console.log(SPY_Universe);
// console.log(SPY_Universe.length);

// let followers = ["Muzammil", "Aaquib", "Wakar", "Rakshit"];
// console.log(followers);
// let Blocked = followers.shift();
// console.log(followers);
// console.log(Blocked);


// let Months = ["July", "June", "March", "April"];
// console.log(Months);
// Months.shift();
// Months.shift();
// console.log(Months);
// Months.unshift("February");
// Months.unshift("January");
// console.log(Months);
// console.log(Months.indexOf("April")); //exists at index 3
// console.log(Months.indexOf("July")); //not exists
// console.log(Months.indexOf("June")); //not exists
// console.log(Months.indexOf("January")); //0th index
// console.log(Months.indexOf("january")); //case sensitive
// console.log(Months.includes("january"));
// console.log(Months.includes("January"));
// console.log(Months.includes("April"));
// console.log(Months.includes("april"));

// Arrays concatination----------------
let RGB = ["Red", "Green", "Blue"];
let CMYK = ["Cyan", "Magenta", "Yellow", "Black"];
let AllColor = RGB.concat(CMYK);
console.log(AllColor);
// console.log(AllColor.reverse());
//  console.log(RGB.concat(CMYK));
//  console.log(CMYK.concat(RGB));
// console.log(RGB.reverse()); //.reverse()Method
// console.log(CMYK.slice(1)); //.slice()Method
// console.log(CMYK.slice(1, 3));
// console.log(CMYK.slice(1, 4));
// console.log(CMYK.slice(5));
// console.log(CMYK.slice(-5));
// console.log(CMYK.slice(-2));
// console.log(CMYK.slice(CMYK.length));
// console.log(CMYK.splice(0, 1));
// console.log(CMYK.splice(0, 2));
CMYK.splice(0, 0, "Pink", "Violet", "Sky Blue");
console.log(CMYK);
RGB.splice(1, 0, "Purpul");
console.log(RGB);
RGB.splice(2, 1, "Orange");
// RGB.splice(2, 2, "Orange");
console.log(RGB);
// .Sort()Method-> by default assending-----
AllColor.sort();
console.log(AllColor);

let month = ["august", "september", "march", "April"];
console.log(month);
month.splice(0, 2, "january", "february");
console.log(month);

let language = ['C', 'C#', 'html', 'css', 'javascript', 'python', 'C++', 'java'];
language.push('SQL');
console.log(language);
console.log(language.reverse().indexOf('javascript'));
// console.log(language);