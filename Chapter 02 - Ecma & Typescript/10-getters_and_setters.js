class Person {
  constructor(name) {
    this._name = name; // atributo privado
  }
  get name() {
    // Será usado
    return this._name;
  }
  set name(value) {
    // Será usado
    this._name = value;
  }
}
let lotChar = new Person("Frodo");
console.log(lotChar.name);
lotChar.name = "Gandalf";
console.log(lotChar.name);
lotChar._name = "Sam";
console.log(lotChar);
