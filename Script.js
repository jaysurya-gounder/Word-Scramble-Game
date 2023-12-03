let scrambledWord = "";
let currentWord = "";
let hint = "";
let time = 0;

function refreshGame() {
  // Get a random word from the array
  time = 0;
  let randomNum = Math.floor(Math.random() * words.length)
  currentWord = words[randomNum].word;
  hint = words[randomNum].hint;

  // Scramble the word
  scrambledWord = scrambleWord(currentWord);

  // Display the scrambled word
  document.getElementById("word").textContent = scrambledWord.toUpperCase();
  document.getElementById("hint").textContent = hint
}

// set timer
setInterval(() => {
  if (time >= 30) {
    time = 0;
    refreshGame()
  } else {
    time++;
    document.getElementById('time').textContent = `${time}s`
  }
}, 1000)

function scrambleWord(word) {
  // Scramble the word by shuffling its letters
  return word.split('').sort(() => { return 0.5 - Math.random() }).join('');
}

function checkGuess() {
  const userGuess = document.getElementById("inpBox").value.toLowerCase();

  if (userGuess === currentWord) {
    document.getElementById('check').innerHTML = "Correct! You unscrambled the word."
    document.getElementById('check').style.color = "#4BB543"
    document.getElementById("word").style.color = "#4BB543"
    setTimeout(() => {
      document.getElementById('check').innerHTML = "";
      document.getElementById('check').style.color = "#000000"
      document.getElementById("word").style.color = "#000000"
      refreshGame(); // Start a new round
    }, 3000)
  } else {
    document.getElementById('check').innerHTML = "Incorrect! Try again."
    document.getElementById('check').style.color = "#ff0011"
    document.getElementById("word").style.color = "#ff0011"
    setTimeout(() => {
      document.getElementById('check').innerHTML = "";
      document.getElementById('check').style.color = "#000000"
      document.getElementById("word").style.color = "#000000"
    }, 3000)
  }

  // Clear the input field
  document.getElementById("inpBox").value = "";
}

// Start the game when the page loads
window.onload = refreshGame;