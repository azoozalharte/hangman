"use strict";
const Hangman = function (word, numberOfGuesses) {
  this.word = word.toLowerCase().split("");
  this.numberOfGuesses = numberOfGuesses;
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
      this.numberOfGuesses--;
    }
    this.guessedLetters.push(letter);
    this.getPuzzle();
  }
};

const word1 = new Hangman("abdulaziz", 3);
console.log(word1.getPuzzle());
console.log(word1.numberOfGuesses);
window.addEventListener("keypress", function (e) {
  const guess = e.key;
  word1.makeGuess(guess);
  console.log(word1.getPuzzle());
  console.log(word1.numberOfGuesses);
});
