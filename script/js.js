let gameBoard;
function start() {
    gameBoard= new GameBoard(DEFAULT_ROWS, DEFAULT_COLS, "gameBoard");
    gameBoard.draw();
}
function play(x, y) {
    gameBoard.play(x, y);
}

start();