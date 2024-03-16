import React, { useState } from "react";
import "./square.css";
import { circleSvg, crossSvg } from "../../assets/asssets";

export default function Square({
  id,
  setGameState,
  currentPlayer,
  setCurrentPlayer,
  finishedState,
}) {
  const [icon, setIcon] = useState(null);
  const squareClicked = () => {
    if(finishedState) return;
    if (!icon) {
      const currentPlayerTurn = currentPlayer;
      currentPlayer === "circle" ? setIcon(circleSvg) : setIcon(crossSvg);
      setCurrentPlayer(currentPlayer === "circle" ? "cross" : "circle");
      const rowIndex = Math.floor(id / 3);
      const colIndex = Math.floor(id % 3);     
      setGameState((prevState) => {
        let stateToUpdate = [...prevState];
        stateToUpdate[rowIndex][colIndex] = currentPlayerTurn;
        return stateToUpdate;
      })
    }
  };
  return (
    <div className={`${finishedState ? "finshed" : "square"}`} onClick={squareClicked}>
      {icon}
    </div>
  );
}
