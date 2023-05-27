"use strict";
let movie = "Lord of the Rings";
// var movie = 'Harry Potter'
function starWarsFan() {
  const movie = "Star Wars";
  return movie;
}
function marvelVan() {
  movie = "Black Panther";
  return movie;
}
function blizzardFan() {
  const isFan = true;
  let phrase = "Warcraft";
  console.log("Before if: " + phrase);
  if (isFan) {
    let phrase = "For the Horde";
    console.log("Inside if: " + phrase);
  }
  phrase = "For the Alliance!";
  console.log("After if: " + phrase);
}
console.log(movie);
console.log(starWarsFan);
console.log(marvelVan);
console.log(movie);
blizzardFan();
