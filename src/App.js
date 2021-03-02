import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(3);

  return (
    <div className="App">
      <header className="App-header">
        <span>Число: {num}</span>
        <div className="ButtonBlock">
          <button className="Button" onClick = {() => setNum(num + 1)}> + </button>
          <button className="Button" onClick = {() => setNum(num - 2)}> - </button>
        </div>
      </header>
    </div>
  );
}

export default App;
