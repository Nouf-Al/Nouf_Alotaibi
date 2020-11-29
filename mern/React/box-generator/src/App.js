import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import BoxForm from "./Components/BoxForm";
import BoxDisplay from "./Components/BoxDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [colors, setColors] = useState([]);
  const [heights, setHeights] = useState([]);
  const [widths, setWidths] = useState([]);

  return (
    <div className="container">
      <div className="jumbotron my-5">
        <div className="row">
          <div className="col-sm-4">
            <BoxForm
              addNewDivColor={(color , height, width) => {
                setColors([color, ...colors]);
                setHeights([height,...heights]);
                setWidths([width,...widths]);

              }}
            />
          </div>
          <div className="col-sm-8 d-flex flex-wrap">
            {colors.map((color, i) => (
              <BoxDisplay key={i} color={color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
