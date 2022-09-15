const domGuessWord = document.querySelector("#guess-word");
const domGuessLeft = document.querySelector("#guesses-left");

const word1 = new Hangman("abdulaziz", 3);

domGuessWord.innerHTML = word1.getPuzzle();
domGuessLeft.innerHTML = word1.numberOfGuesses;

window.addEventListener("keypress", function (e) {
  const guess = e.key;
  word1.makeGuess(guess);
  domGuessWord.innerHTML = word1.getPuzzle();

  domGuessLeft.innerHTML = word1.numberOfGuesses;
});
