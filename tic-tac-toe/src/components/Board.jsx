// generate React functional component called Board that represents tic-tac-toe board
// Accept board through props as a matrix of N rows and N columns
// When the cell is clicked - call the onClick function passed through props with the row and column number of the clicked cell

import React from 'react';
import './Board.css';
import Square from './Square';


// React functional component called Board
export const Board = ({ board, onSquareClicked, disabled }) => {
    return (
        <div id="board">
            {board.map((row, rowIndex) => {
                return (
                    <div className="row" key={rowIndex}>
                        {row.map((col, colIndex) => {
                            return (
                                <Square
                                    key={rowIndex+colIndex}
                                    value={board[rowIndex][colIndex]}
                                    onClick={() => onSquareClicked(rowIndex, colIndex)}
                                    disabled={disabled}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );

}
