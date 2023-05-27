var myVariable = "global";
var myOtherVariable = "global";
function myFunction() {
  return myVariable;
}
function myOtherFunction() {
  myOtherVariable = "local";
  return myOtherVariable;
}

console.log(myVariable);
console.log(myFunction());
console.log(myOtherFunction());
console.log(myOtherVariable);
