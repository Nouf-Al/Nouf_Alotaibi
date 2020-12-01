import "./App.css";
import { Router } from "@reach/router";
import NumberOrWord from "./components/NumberOrWord";
import Home from "./components/home";
import TextColor from "./components/TextColor";
import TextBackground from "./components/TextBackground";

function App() {
  return (
    <Router>
      <Home path="/home" />
      <NumberOrWord path="/:value" />
      <TextColor path="/:value/:color" />
      <TextBackground path="/:value/:color/:background" />
    </Router>
  );
}

export default App;
