import { useEffect, useState } from "react";
import "./App.css";
import Square from "./components/Square/Square";

function App() {
  const elements = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const [gameState, setGameState] = useState(elements);
  const [currentPlayer, setCurrentPlayer] = useState("circle");
  const [finishedState, setFinishedState] = useState(false);

  const checkWinnner = () => {
    // row winner check
    for (let rowIndex = 0; rowIndex < gameState.length; rowIndex++) {
      if (
        gameState[rowIndex][0] === gameState[rowIndex][1] &&
        gameState[rowIndex][1] === gameState[rowIndex][2]
      ) {
        return gameState[rowIndex][0];
      }
    }
    // col winner check
    for (let colIndex = 0; colIndex < gameState.length; colIndex++) {
      if (
        gameState[0][colIndex] === gameState[1][colIndex] &&
        gameState[1][colIndex] === gameState[2][colIndex]
      ) {
        return gameState[0][colIndex];
      }
    }
    // Check diagonals
    if (
      gameState[0][0] === gameState[1][1] &&
      gameState[1][1] === gameState[2][2]
    ) {
      return gameState[0][0];
    }
    if (
      gameState[0][2] === gameState[1][1] &&
      gameState[1][1] === gameState[2][0]
    ) {
      return gameState[0][2];
    }

    // Check for a draw
    let isDraw = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (gameState[i][j] !== "cross" && gameState[i][j] !== "circle") {
          isDraw = false;
          break;
        }
      }
      if (!isDraw) {
        break;
      }
    }
    if (isDraw) {
      return "draw";
    }

    return null;
  };
  useEffect(() => {
    const winner = checkWinnner();
    console.log(winner);
    setFinishedState(winner);
  }, [gameState]);

  return (
    <div className="main-wrapper">
      <div className="player-wrapper">
        <div className="left">Self</div>
        <div className="right">Opponent</div>
      </div>
      <h1>Tic Tac Toe</h1>
      <div className="square-wrapper">
        {gameState.map((arr, rowIndex) =>
          arr.map((item, colIndex) => {
            return (
              <Square
                key={rowIndex * 3 + colIndex}
                id={rowIndex * 3 + colIndex}
                setGameState={setGameState}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer}
                finishedState={finishedState}
              />
            );
          })
        )}
      </div>
      {finishedState && finishedState==="draw" && <h2>It is a {finishedState.toUpperCase()}</h2>}
      {finishedState && finishedState!="draw" && <h2>{finishedState.toUpperCase()} won the game</h2>}
    </div>
  );
}

export default App;
