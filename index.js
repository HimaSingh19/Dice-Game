
/**
 * Dice Game Logic: Rolls dice, updates images, and declares the winner.
 * This function will be called when the 'Roll Dice!' button is clicked.
 */
function rollTheDice() {
  // --- Player 1 Logic ---

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  
  // CORRECT: Includes the 'images/' folder path
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; 

  // Select the first image and update its source
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


  // --- Player 2 Logic ---

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  // CORRECT: Includes the 'images/' folder path
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; 

  // Select the second image and update its source
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  // --- Game Result Logic ---

  var header = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    header.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    header.innerHTML = "Player 2 Wins! 🚩";
  } else {
    header.innerHTML = "🤝 Draw!";
  }
}

// Attach the rollTheDice function to the button click event
document.getElementById("rollButton").addEventListener("click", rollTheDice);

// Optional: Run once on load to show initial results (or remove this if you only want it on button click)
rollTheDice();