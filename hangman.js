"use strict";
const Hangman = function (word, number, guessedLetters) {
  this.word = word.toLowerCase().split("");
  this.number = number;
  this.guessedLetters = guessedLetters;
};
// car
// ***
// azo alharte
// *** *******
Hangman.prototype.getPuzzle = function () {
  let guessedLetterArr = this.guessedLetters.toLowerCase().split("");
  let puzzle = "";
  this.word.map((val) => {
    if (guessedLetterArr.includes(val)) {
      puzzle += val;
    } else if (val != " ") {
      puzzle += "*";
    } else {
      puzzle += val;
    }
  });
  return puzzle;
};

const word1 = new Hangman("abdulaziz", 3, "azibd");
console.log(word1.getPuzzle());
