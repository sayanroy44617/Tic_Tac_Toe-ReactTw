import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? "X" : "O";

    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = calculateWinner(squares);
  const isBoardFull = squares.every((square) => square !== null);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else if (isBoardFull) {
    status = "It's a Draw!";
  } else {
    status = "Next Player: " + (isXNext ? "X" : "O");
  }

  return (
    <>
      <div className="status" data-testid="status">
        {status}
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <button onClick={resetBoard} style={{ marginTop: "10px", marginLeft: "20px" }}>
        Reset
      </button>
    </>
  );
};

export default Board;
