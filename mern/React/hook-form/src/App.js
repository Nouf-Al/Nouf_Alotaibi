import "./App.css";
import HookForm from "./components/HookForm";
import HookCard from "./components/HookCard";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  const [inputs, setInputs] = useState("");

  return (
    <div className="App">
      <div className="container">
        <HookForm setInputs={setInputs} />

        <HookCard inputs={inputs} />
      </div>
    </div>
  );
}

export default App;
