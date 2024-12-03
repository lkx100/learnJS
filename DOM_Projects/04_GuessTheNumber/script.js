var randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber);
const lastguesses = 10;
const submit = document.querySelector("#subt");
var prevGuesses = document.querySelector(".guesses");
var allPrevGuesses = [];
var remaining = document.querySelector(".lastResult");
var lowHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const userInput = document.querySelector(".guessField");
const p = document.createElement('p');

var playGame = true
var totalGuesses = 0

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        let guess = parseInt(document.querySelector("#guessField").value);
        if (!isValidGuess(guess)) alert("Inavlid Number");
        else {
            totalGuesses += 1;
            if (totalGuesses < 10) {
                allPrevGuesses.push(guess);
                displayGuess(guess);
                checkGuess(guess);
            }
            else {
                displayGuess(guess);
                displayMssge(`GAME OVER!!<br><p>Random Number was: ${randomNumber}</p>`);
                endGame();
            }
        }
    })
}
const isValidGuess = (guess) => {
    if (isNaN(guess) || guess <= 0 || guess >= 100) return false;
    return true;
}
const displayMssge = (mssge) => {
    lowHigh.innerHTML = mssge;
}
const checkGuess = (guess) => {
    if (guess < randomNumber) {
        lowHigh.innerHTML = "Your guess is lower than the Actual Number";
    }
    else if (guess > randomNumber) {
        lowHigh.innerHTML = "Your guess is greater than the Actual Number";
    }
    else {
        lowHigh.innerHTML = "You guessed it right";
        endGame();
    }
}
const displayGuess = (guess) => {
    userInput.value = "";
    prevGuesses.innerHTML += `${guess}, `;
    remaining.innerHTML = parseInt(lastguesses - totalGuesses);
}
const endGame = () => {
    playGame = false;
    userInput.value = "";
    userInput.setAttribute('disabled', '')
    p.classList.add("button");
    p.innerHTML = "<h2 id='newGame'>Start New Game</h2>";
    startOver.appendChild(p);
    newGame();
}
const newGame = () => {
    const newGame = document.querySelector("#newGame");
    newGame.addEventListener("click", (e) => {
        randomNumber = parseInt(Math.random()*100 + 1);
        console.log(randomNumber);
        allPrevGuesses = [];
        totalGuesses = 0;
        prevGuesses.innerHTML = "";
        lowHigh.innerHTML = "";
        remaining.innerHTML = lastguesses;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
