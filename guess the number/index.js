let numberToGuess = Math.floor(Math.random() * 100) + 1;
let guessesUsed = 0;
let maxGuesses = 10;

function submitGuess() {    
    let numberInput = document.getElementById("guess-field");
    let number = parseInt(numberInput.value);
    let guessesLeft = document.getElementById("guesses-left");
    let display = document.getElementById("display");

    guessesUsed++;

    if (number === numberToGuess) {
        display.value = `congrats! you guessed it in ${guessesUsed} tries!`;
    } else if (number < numberToGuess) {
        display.value = `my number is GREATER than ${number}`;
    } else if (number > numberToGuess) {
        display.value = `my number is LESS than ${number}`;
    }
    
    numberInput.value = "";
    guessesLeft.innerText = maxGuesses - guessesUsed;

    if(guessesUsed >= maxGuesses && number !== numberToGuess) {
        display.value = `try again :( the number was ${numberToGuess}`;

        document.getElementById("btn-guess").disabled = true;
    }    
}

function restartGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    guessesUsed = 0;

    let guessesLeft = document.getElementById("guesses-left");
    let display = document.getElementById("display");
    let numberInput = document.getElementById("guess-field");

    guessesLeft.innerText = maxGuesses;
    display.value = "";
    numberInput.value = "";

    document.getElementById("btn-guess").disabled = false;
}