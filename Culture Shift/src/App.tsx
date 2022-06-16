import GameOfLife from "./GameOfLife";
import { generateInitialState, evolve, Cell } from "./models/game-of-life";
import React, {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

const App: FunctionComponent<{}> = () => {
  const [cells, setCells] = useState<Set<Cell>>(generateInitialState());
  const [autoEvolve, setAutoEvolve] = useState<boolean>(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (autoEvolve) {
        setCells((cells) => evolve(cells));
      }
    }, 250);

    return () => clearInterval(timerId);
  }, [autoEvolve, setCells]);

  const changeAutoStep = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setAutoEvolve(ev.currentTarget.checked);
    },
    [setAutoEvolve]
  );

  const clickEvolve = useCallback(() => {
    setCells((cells) => evolve(cells));
  }, [setCells]);

  return (
    <div className="App">
      <label>
        <input type="checkbox" checked={autoEvolve} onChange={changeAutoStep} />{" "}
        Auto-evolve
      </label>
      <button onClick={clickEvolve}>Evolve</button>
      <GameOfLife cells={cells} width={100} height={100} />
    </div>
  );
};

export default App;
