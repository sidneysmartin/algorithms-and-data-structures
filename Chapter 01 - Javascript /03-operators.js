"use strict";
var num = 0;
num = 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;
console.log("num == 1: " + (num == 1));
console.log("num === 1: " + (num === 1));
console.log("num != 1: " + (num != 1));
console.log("num > 1" + (num > 1));
console.log("num < 1" + (num < 1));
console.log("num >= 1" + (num >= 1));
console.log("num <= 1" + (num <= 1));
console.log("true || false" + (true || false));
console.log("!true" + !true);
console.log("5 & 1: ", 5 & 1);
console.log("5 | 1: ", 5 | 1);
console.log("~ 5: ", ~5);
console.log("5 ^ 1", 5 ^ 1);
console.log("5 << 1", 5 << 1);
console.log("5 >> 1", 5 >> 1);
console.log("typeof num: ", typeof num);
console.log("typeof Pack: ", typeof "Pack");
console.log("type [1,2,3]: ", typeof [1, 2, 3]);
console.log("typeof {name: John}: ", typeof { name: "John" });
var myObj = { name: "John", age: 21 };
delete myObj.age;
console.log(myObj);

// ES2016
/*
 **
 */
const raio = 5;
// const area = 3.14 * raio * raio;// antigamente
//const area = 3.14 * Math.pow(raio, 2);// usando a função Math.pow
// Novo operador ( ** )
const area = 3.14 * raio ** 2;
console.log(area);
