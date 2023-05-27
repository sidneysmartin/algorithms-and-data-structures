"use strict";
// var framework = "Angular";
// var framework = "React";
// console.log(framework);
// let language = "Python";
// let language = "Ruby"; // lança erro
// console.log(language);
const PI = 3.141593;
// PI = 3.0 // lança erro
console.log(PI);
/*
Let é a nova palavra reservada var, o que significa que podemos simplesmente
substituir a palavra reservada let, ou const(No entanto, variáveis const são somente de leitura.)
*/
const jsFramework = {
  name: "Angular",
};
const result = (jsFramework.name = "React");
console.log(result);
/*
// * erro, não é possível atribuir outra referência ao objeto.
const jsFramework = {
  name:"Vue"
}
*/
