const Hangman = function (word, number) {
  this.word = word;
  this.number = number;
};

const word1 = new Hangman("cat", 3);
console.log(word1);
const word2 = new Hangman("dog", 3);
console.log(word2);
