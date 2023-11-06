
import "./App.css";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const counterHandler = (num) => {
    const updatedValue = counter + num;

    if (updatedValue >= 0) {
      setCounter(updatedValue);
    }
  };

  return (
    <div>
      <h1>Welcome To React</h1>
      <div className="counter-wrapper">
        <button onClick={() => counterHandler(1)}>
          <h3>+</h3>
        </button>
        <h1>{counter}</h1>
        <button onClick={() => counterHandler(-1)}>
          <h3>-</h3>
        </button>
      </div>
    </div>
  );
};

export default App;