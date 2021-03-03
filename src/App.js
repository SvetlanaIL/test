import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState();
  const [color, setColor] = useState();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setNum(e.target.value);
    // console.log(e.target.value);
  };

  const increment = () => {
    if (num < 20) {
      console.log(+num);
      setText("");
      setNum(+num + 1);
      setColor("green");
    }
  };

  const decrement = () => {
    if (num > 1) {
      setNum(num - 2);
      setColor("red");
    }
  };

  useEffect(() => {
    if (num > 19) setText("Достигнуто максимальное значение");
    if (num < 20) setText("");
    console.log("!!!");
  }, [num]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          style={{ color: color }}
          className="Input"
          onChange={handleChange}
          value={num}
        ></input>
        <div>{text}</div>
        <div className="ButtonBlock">
          <button className="Button" onClick={increment}>
            +
          </button>
          <button className="Button" onClick={decrement}>
            -
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
