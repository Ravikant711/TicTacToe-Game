const boxes = document.querySelectorAll('.box');
const resetButton = document.querySelector('.js-reset-button');
const gameResult = document.querySelector('.js-game-result');

// Initialize the game variables
let player = 'X';
let gameBoard = ['', '', '', '', '', '', '', ''];
let isGameOver = false;

// Define the winning combinations 
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// add event listener to the boxes
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (!isGameOver && box.textContent === '') {
            // update the square with the current player's mark
            box.textContent = player;

            // update the gameBoard array with current player's mark
            gameBoard[box.id] = player;

            // call the function for checking the game winner or tie
            checkForWinner();

            // switch to the other player
            player = player === 'X' ? 'O' : 'X';
        }
    });
});

// add event listener to the reset button
resetButton.addEventListener('click', () => {
    resetGame();
});

// check if the game board has a winner or tie
function checkForWinner() {
    // check for the winning combination
    winningCombos.forEach((combo) => {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            // display the winner
            gameResult.innerText = `${player} wins!`;
            isGameOver = true;
        }
    });

    // check for the tie
    if (!gameBoard.includes('') && !isGameOver) {
        gameResult.innerText = `It's a tie!`;
        isGameOver = true;
    }
}

// reset the game 
function resetGame() {
    // clear the boxes and the game board array
    boxes.forEach((box) => {
        box.textContent = '';
    });

    gameBoard = ['', '', '', '', '', '', '', ''];

    // clear the game result
    gameResult.innerText = '';

    // reset the game variable
    player = 'X';
    isGameOver = false;
}
