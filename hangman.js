("use strict");
const Hangman = function (word, numberOfGuesses) {
  this.word = word.toLowerCase().split("");
  this.numberOfGuesses = numberOfGuesses;
  this.guessedLetters = [];
  this.status = "playing";
};

Hangman.prototype.playingStatus = function () {
  if (this.numberOfGuesses === 0) {
    return (this.status = "failed");
  } else if (this.word.join("") === this.getPuzzle()) {
    return (this.status = "finished");
  } else {
    return this.status;
  }
};

Hangman.prototype.statusMessage = function () {
  if (this.status === "failed") {
    return `خسرت التحدي الكلمة هي  "${this.word.join("")}"`;
  } else if (this.status === "finished") {
    return "أهنيك أكتشفت الكلمة";
  } else {
    return "";
  }
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
  if (this.status != "playing") {
    return;
  }
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

  this.playingStatus();
};
