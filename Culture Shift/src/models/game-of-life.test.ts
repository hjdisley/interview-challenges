import { Cell, evolve } from "./game-of-life";

describe("evolve", () => {
  it("should not do anything with an empty grid", () => {
    expect(evolve(new Set<Cell>())).toEqual(new Set<Cell>());
  });

  /*
  Scenario 1: Underpopulation
    Given a game of life
    When a live cell has fewer than two neighbours
    Then this cell dies
   */
  it("should kill a cell if it has fewer than two neighbours", () => {
    const nextGeneration = evolve(new Set<Cell>(["1,1"]));

    expect(nextGeneration.has("1,1")).toBe(false);
  });

  /*
  Scenario 2: Overcrowding
    Given a game of life
    When a live cell has more than three neighbours
    Then this cell dies
   */
  it("should kill a cell if it has more than 3 neighbours", () => {
    const nextGeneration = evolve(
      new Set<Cell>(["0,1", "1,1", "2,1", "1,2", "1,0"])
    );
    expect(nextGeneration.has("1,1")).toBe(false);
  });

  /*
  Scenario 3: Survival
    Given a game of life
    When a live cell has two or three neighbours
    Then this cell stays alive
   */
  it("should keep a cell alive if it has 2 neighbours", () => {
    const nextGeneration = evolve(new Set<Cell>(["0,1", "1,1", "2,1"]));
    expect(nextGeneration.has("1,1")).toBe(true);
  });

  it("should keep a cell alive if it has 3 neighbours", () => {
    // TODO
  });

  /*
  Scenario 4: Creation of Life
    Given a game of life
    When a dead cell has exactly three neighbours
    Then this cell becomes alive
   */
  // TODO
});
