import React from "react";
import { useState } from "react";
import CalcWinner from "../../helper";

//styling
import "../App/App.css";

//components
import Square from "../Square";

function Board({ board, move }) {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const winner = CalcWinner(square);

  function reset() {
    setCount(0);
    setSquare(Array(9).fill(null));
  }

  function handleOnClick(i) {
    if (square[i] !== null) {
      return;
    }
    const newCount = count + 1;
    setCount(newCount);
    if (newCount % 2 === 1) {
      setSquare([...square.slice(0, i), "❌", ...square.slice(i + 1)]);
    } else {
      setSquare([...square.slice(0, i), "⭕", ...square.slice(i + 1)]);
    }
  }

  function renderSquare(i) {
    return (
      <Square
        value={square[i]}
        onClick={() => handleOnClick(i)}
        count={count}
      />
    );
  }

  return (
    <div className="Board">
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      <p>Next player: {count % 2 === 1 ? "⭕" : "❌"}</p>
      <p>The winner: {winner === null && count === 9 ? "Draw" : winner}</p>
      <button onClick={reset}>Reset Game</button>
    </div>
  );
}

export default Board;
