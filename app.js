const domGuessWord = document.querySelector("#guess-word");
const domGuessLeft = document.querySelector("#guesses-left");

const word1 = new Hangman("car", 3);

domGuessWord.innerHTML = word1.getPuzzle();
domGuessLeft.innerHTML = word1.numberOfGuesses;
word1.playingStatus();

window.addEventListener("keypress", function (e) {
  const guess = e.key;
  word1.makeGuess(guess);
  domGuessWord.innerHTML = word1.getPuzzle();
  domGuessLeft.innerHTML = word1.numberOfGuesses;
});
