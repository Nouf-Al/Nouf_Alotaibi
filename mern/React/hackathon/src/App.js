import "./App.css";
import Game from "./components/component1";
import GameResult from "./components/component2";
import React, { useState } from "react";

function App() {
  // const [inputs, setInputs] = useState([
  //   fullness,
  //   happiness,
  //   meals,
  //   energy
  // ]

  // );
  return (
    <div className="App">
      <div className="container">
        <div className="results">{/* <GameResult/> */}</div>

        <div className="game-btns">
          <Game />
        </div>
        
      </div>
    </div>
  );
}

export default App;
