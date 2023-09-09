import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';

import { isGameOver, isThereATie } from './helpers/helpers';

function App() {
  // create a default board value of a 3x3 array of null values
  const defaultBoardValue = Array(3).fill(Array(3).fill(null));
  
  // set the initial state of the board
  const [board, setBoard] = useState(defaultBoardValue);

  // set the initial state of the current player (1 or 2)
  const [currentPlayer, setCurrentPlayer] = useState(1);

  // set the initial state of the winner
  const [winner, setWinner] = useState(null);

  const onSquareClicked = (r, c) => {
    // create a copy of the board
    const boardCopy = board.map(r => [...r]);
    // if the square is empty and the game is not over
    if (!boardCopy[r][c] && !isGameOver(boardCopy)) {
        // set the square to the current player
        boardCopy[r][c] = currentPlayer;
        // set the board to the new board
        setBoard(boardCopy);
        // set the current player to the next player
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }

    if (isGameOver(boardCopy)) {
        // set the winner to the current player if no a tie
        setWinner(isThereATie(boardCopy) ? 0 : currentPlayer);
    }
  };

  const restartGame = () => {
    // set the board to the default value
    setBoard(defaultBoardValue);
    // set the current player to 1
    setCurrentPlayer(1);
    // set the winner to null
    setWinner(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe
      </header>
      {winner === null && <h2>Player {currentPlayer}'s move</h2>}
      {winner === 0 && <h2>It's a tie</h2>}
      {winner > 0 && <h2>Player {winner} won 🥳</h2>}
      <Board
        board={board}
        onSquareClicked={onSquareClicked}
        disabled={winner !== null}
      />

      {/* show the button to restart the game and set the state value to default */}
      <button className="btn" onClick={() => restartGame()}>Restart the game</button>
    </div>
  );
}

export default App;
