"use strict";
var obj = new Object();
obj = {
  name: {
    first: "Gandalf",
    last: "the Grey",
  },
  address: "Middle Earth",
};

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}
var b = new Book("The Lord of the Rings", "1216", "0544273443");
console.log(b.title);
b.title = "The Lord of the Rings Deluxe Edition";
console.log(b.title);
