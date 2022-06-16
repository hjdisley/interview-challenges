export type Cell = string;

export function generateInitialState() {
  return new Set<Cell>(["1,1", "1,2", "1,3"]);
}

function neighbours(cell: Cell) {
  const [x, y] = cell.split(",").map((coord) => parseInt(coord, 10));
  return [
    `${x - 1},${y - 1}`,
    `${x},${y - 1}`,
    `${x + 1},${y - 1}`,
    `${x - 1},${y}`,
    `${x + 1},${y}`,
    `${x - 1},${y + 1}`,
    `${x},${y + 1}`,
    `${x + 1},${y + 1}`,
  ];
}

function numberOfNeighbours(cell: Cell, cells: Set<Cell>) {
  let n = 0;
  for (const neighbour of neighbours(cell)) {
    if (cells.has(neighbour)) n += 1;
  }
  return n;
}

export function evolve(cells: Set<Cell>): Set<Cell> {
  const nextEvolution = new Set<Cell>();
  cells.forEach((cell) => {
    if (numberOfNeighbours(cell, cells) === 2) nextEvolution.add(cell);
  });

  return nextEvolution;
}
