"use strict";
const Hangman = function (word, number) {
  this.word = word.toLowerCase().split("");
  this.number = number;
  this.guessedLetters = [];
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.map((val) => {
    if (this.guessedLetters.includes(val)) {
      puzzle += val;
    } else if (val != " ") {
      puzzle += "*";
    } else {
      puzzle += val;
    }
  });
  return puzzle;
};

const word1 = new Hangman("abdulaziz", 3);
console.log(word1.getPuzzle());
