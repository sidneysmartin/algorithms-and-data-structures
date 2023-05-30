"use strict";
// function Book(title, pages, isbn) {
//   (this.title = title), (this.pages = pages), (this.isbn = isbn);
// }
// Book.prototype.printTitle = function () {
//   console.log(this.title);
// };
// pA partir do ES2015 podemos simplificar
class Book {
  constructor(title, pages, isbn) {
    (this.title = title), (this.pages = pages), (this.isbn = isbn);
  }
}

let book = new Book("title", "pag", "isb");
console.log(`${book.title}, ${book.pages} ${book.isbn}`);
book.title = "New Title";
console.log(book.title);
