// module.exports.sum = (a, b) => a + b;
const mul = (a, b) => a * b;
exports.PI = 3.14;
const g = 9.8;

let obj = {
    // sum: sum,
    mul: mul,
    // PI: PI,
    g: g
}
module.exports = obj;
// module.exports = 123;

// or---------------------------------------
// module.exports = {
//     // sum: sum,
//     mul: mul,
//     PI: PI,
//     g: g
// }

// -----------------------------
// export PI = 5; ------------->error, because PI is not a property or object here