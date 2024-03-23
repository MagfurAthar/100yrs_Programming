let age = 45;
let gender = 'Female';
let finalDiscount;
if (age <= 5) {
    finalDiscount = 100;
} else if (gender == 'Female' || (age <= 8 && age > 5)) {
    finalDiscount = 50;
} else if (age >= 65) {
    finalDiscount = 70;
} else {
    finalDiscount = 0;
}
console.log(`Your final discount is : ${finalDiscount}%`);

