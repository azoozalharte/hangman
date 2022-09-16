const domGuessWord = document.querySelector("#guess-word");
const domGuessLeft = document.querySelector("#guesses-left");

const array = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const randomElement = array[Math.floor(Math.random() * array.length)];

const word1 = new Hangman(randomElement, 3);

domGuessWord.innerHTML = word1.getPuzzle;
domGuessLeft.innerHTML = word1.numberOfGuesses;
word1.playingStatus();

window.addEventListener("keypress", function (e) {
  const guess = e.key;
  word1.makeGuess(guess);
  document.querySelector(".status-message").innerHTML = word1.statusMessage;
  domGuessWord.innerHTML = word1.getPuzzle;
  domGuessLeft.innerHTML = word1.numberOfGuesses;
});
