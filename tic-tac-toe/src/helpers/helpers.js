// implement function checkForATie here and export it
// it should accept a number[][] called board as an argument and return a boolean
// it should return true if there is no null in the board

export function isThereATie(board) {
    return board.every((row) => row.every((cell) => cell !== null));
}

// implement function isGameOver here and export it
// it should check if there is a winner or if there is a draw in a tic-tac-toe game
// it should accept a number[][] called Board as an argument and return a boolean
// it should return true if there is at least 1 row, column or diagonal with the same value but not null
// it should return false if there is no row, column or diagonal with the same value or if all values are null

export function isGameOver(board) {
    // check rows
    const isThereWinningRow = b => b.some((row) => {
        return row.every((cell) => cell === row[0] && cell !== null);
    });
    // check columns
    const isThereWinningColumn = b => {
        const transposedBoard = b[0].map((_, index) => b.map((row) => row[index]));
        return isThereWinningRow(transposedBoard);
    };
    // check diagonals
    const isThereWinningDiagonal = b => {
        const diagonal1 = b.map((row, index) => row[index]);
        const diagonal2 = b.map((row, index) => row[row.length - 1 - index]);
        return isThereWinningRow([diagonal1, diagonal2]);
    };

    return isThereWinningRow(board) || isThereWinningColumn(board) || isThereWinningDiagonal(board) || isThereATie(board);
}


