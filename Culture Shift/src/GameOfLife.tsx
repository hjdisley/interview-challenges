import React, { FunctionComponent } from "react";
import "./GameOfLife.css";
import { Cell } from "./models/game-of-life";

const GameOfLife: FunctionComponent<{
  cells: Set<Cell>;
  height: number;
  width: number;
}> = ({ height, width, cells }) => {
  const rows = [];
  for (let y = 0; y < height; ++y) {
    const row = [];
    for (let x = 0; x < width; ++x) {
      row.push(
        <td
          key={x}
          className={cells.has(`${x},${y}`) ? "game-of-life__cell" : ""}
        />
      );
    }
    rows.push(<tr key={y}>{row}</tr>);
  }

  return (
    <table className="game-of-life">
      <tbody>{rows}</tbody>
    </table>
  );
};

export default GameOfLife;
