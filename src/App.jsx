import "./App.css";

import { increment, decrement, setDiff, reset } from "./actions";

import ButtonGroup from "./ButtonGroup";
import ShowCount from "./ShowCount";
import InputRange from "./InputRange";
import { useDispatch } from "./hooks/useDispatch";
import { useSelector } from "./hooks/useSelector";

function App() {
  const { count, diff } = useSelector((state) => state);

  const dispatch = useDispatch();

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const onReset = () => dispatch(reset());

  const handleDiff = ({ target }) => dispatch(setDiff(target.valueAsNumber));

  return (
    <div className="App">
      <main className="App-main">
        <ShowCount count={count} diff={diff} />
        <InputRange handleDiff={handleDiff} diff={diff} />
        <ButtonGroup
          onDecrement={onDecrement}
          onReset={onReset}
          onIncrement={onIncrement}
        />
      </main>
    </div>
  );
}

export default App;
