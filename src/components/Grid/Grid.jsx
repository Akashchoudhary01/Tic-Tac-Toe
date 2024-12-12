
import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import isWinner from "../../helper/checkWinner.js";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true = O, false = X
  const [winner, setWinner] = useState(null);
  const [isTie, setIsTie] = useState(false); // New state for tie

  function play(index) {
    if (board[index] !== "" || winner || isTie) return; // Prevent play on already filled or finished game

    board[index] = turn ? "O" : "X";
    const win = isWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    } else if (!board.includes("")) {
      // Check if the board is full with no winner
      setIsTie(true);
    }
    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setTurn(true); // Reset the turn
    setWinner(null); // Reset the winner state
    setIsTie(false); // Reset the tie state
    setBoard(Array(numberOfCards).fill("")); // Reset the board
  }

  return (
    <div className="grid-Wrapper">
      {winner && (
        <>
          <h1 className="turn-highLight">Winner is {winner}</h1>
          <button className="reset" onClick={reset}>Reset</button>
        </>
      )}
      {isTie && (
        <>
          <h1 className="turn-highLight">Match is a Tie!</h1>
          <button className="reset" onClick={reset}>Reset</button>
        </>
      )}
      {!winner && !isTie && (
        <h1 className="turn-highLight">Current Turn: {turn ? "O" : "X"}</h1>
      )}
      <div className="grid">
        {board.map((el, idx) => (
          <Card
            gameEnd={winner || isTie ? true : false}
            key={idx}
            onPlay={play}
            player={el}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
