("use strict");
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
      const uncorrectLetter = document.createElement("p");
      uncorrectLetter.textContent = letter;
      document.querySelector(".uncorrect-letters").appendChild(uncorrectLetter);
      this.numberOfGuesses--;
    } else {
      const correctLetter = document.createElement("p");
      correctLetter.textContent = letter;
      document.querySelector(".correct-letters").appendChild(correctLetter);
    }
    this.guessedLetters.push(letter);
    this.getPuzzle();
  }
};
