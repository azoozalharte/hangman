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

Hangman.prototype.makeGuess = function (letter) {
  letter = letter.toLowerCase();
  if (!this.guessedLetters.includes(letter)) {
    if (!this.word.includes(letter)) {
      this.number--;
    }
    this.guessedLetters.push(letter);
    this.getPuzzle();
  }
};

const word1 = new Hangman("abdulaziz", 3);
console.log(word1.getPuzzle());
