"use strict";
// console.log("Patrick: " === true);
// console.log("Patrick: " === "Patrick");
// var person1 = { name: "John" };
// var person2 = { name: "John" };
// console.log(person1 === person2);
// var num = 1;
// if (num === 1) {
//   console.log("Num is equal to 1");
// } else {
//   console.log("Num is not equal to 1, the value of num is " + num);
// }

var month = 5;
// if (month === 1) {
//   console.log("January");
// } else if (month === 2) {
//   console.log("February");
// } else if (month === 3) {
//   console.log("March");
// } else if (month === 4) {
//   console.log("April");
// } else {
//   console.log("Month is not January, February, March or April");
// }

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Month is not January, February, March or April");
    break;
}
