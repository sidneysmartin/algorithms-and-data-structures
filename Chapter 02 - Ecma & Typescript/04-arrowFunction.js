"use strict";
const circleArea = (r) => {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
};

const circleArea2 = (r) => 3.14 * r * r;
console.log(circleArea(5));
console.log(circleArea2(7));
