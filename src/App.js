import logo from "./logo.svg";
import "./App.css";
import useCounterStore from "./zustand/counter-store";

function App() {
  // states from zustand
  const { count, increment, decrement } = useCounterStore((state) => state);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Counter: {count}</span>
        <div className="buttons__counters">
          <button onClick={() => increment()}>+1</button>
          <button onClick={() => decrement()}>-1</button>
        </div>
      </header>
    </div>
  );
}

export default App;
