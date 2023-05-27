"use strict";
function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}
console.log(sum(5, 7));
/*
Com a ES2015, também é possível definir valores default para os parâmetros
das funções, Como não estamos passando z como parâmetro, ele terá um valor igaul a 3 como default
*/