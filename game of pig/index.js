let currentPlayer = 1;
let player1turn = 0;
let player1score = 0;
let player2turn = 0;
let player2score = 0;
const winningScore = 100;
document.getElementById("player1-score").value = player1turn;
document.getElementById("player1-total").value = player1score;
document.getElementById("player2-score").value = player2turn;
document.getElementById("player2-total").value = player2score;
document.getElementById("number-on-dice").value = '';

function holdTheScore() {

    if (currentPlayer === 1) {
        player1score += player1turn;
        player1turn = 0;
        document.getElementById("player1-total").value = player1score;
        document.getElementById("player1-score").value = player1turn;

        if (player1score >= winningScore) {
            alert("Player 1 wins!");
            restartTheGame();
        } else {
            switchPlayers(2);
        }
    } else {
        player2score += player2turn;
        player2turn = 0;
        document.getElementById("player2-total").value = player2score;
        document.getElementById("player2-score").value = player2turn;

        if (player2score >= winningScore) {
            alert("Player 2 wins!");
            restartTheGame();
        } else {
            switchPlayers(1);
        }
    }
}

function rollTheDice() {
    let rolledNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("number-on-dice").value = rolledNumber;

    if (currentPlayer === 1) {
        if (rolledNumber !== 1) {
            player1turn += rolledNumber;
            document.getElementById("player1-score").value = player1turn;
        } else {
            player1turn = 0;
            document.getElementById("player1-score").value = player1turn;
            switchPlayers(2);
        }
    } else {
        if (rolledNumber !== 1) {
            player2turn += rolledNumber;
            document.getElementById("player2-score").value = player2turn;
        } else {
            player2turn = 0;
            document.getElementById("player2-score").value = player2turn;
            switchPlayers(1);
        }
    }
}

function switchPlayers(player) {
    currentPlayer = player;
}

function restartTheGame() {
    currentPlayer = 1;
    player1turn = 0;
    player1score = 0;
    player2turn = 0;
    player2score = 0;
    document.getElementById("player1-score").value = player1turn;
    document.getElementById("player1-total").value = player1score;
    document.getElementById("player2-score").value = player2turn;
    document.getElementById("player2-total").value = player2score;
    document.getElementById("number-on-dice").value = '';
}