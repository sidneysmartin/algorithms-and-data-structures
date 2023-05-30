"use strict";
let params = [3, 4, 5];
console.log(...params);
const sum = (a, b, c) => a + b + c;

console.log(sum.apply(undefined, params));
