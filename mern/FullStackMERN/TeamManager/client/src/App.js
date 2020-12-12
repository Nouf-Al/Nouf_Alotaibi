import "./App.css";
import TeamList from "./components/TeamList";
import PlayerForm from "./components/PlayerForm";
import PlayerStatus from "./components/PlayerStatus";
import PlayerPage from "./components/PlayerPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Router } from "@reach/router";



function App() {
return (
    <>
    <div className="App">
    <div className="container bg-grayy px-5 py-5">
        <div className="row">
        <div className="col">
            <p className="h3 float-left">
            <Link to="/"> Manage Players </Link> |{" "}
            <Link to="/status/game/1"> Manage Player Status </Link>
            </p>
        </div>
        </div>
        <div className=" container bg-light border border-dark my-4 px-5 py-4">
        <div className="row">
            <div className="col">
            <p className="h5 float-left my-4">
                <Link to="players/list"> List </Link> |{" "}
                <Link to="players/add"> Add Player </Link>
            </p>
            </div>
        </div>
        <Router>
            <TeamList path="/players/list" />
            <PlayerForm path="/players/add" />
            <PlayerStatus path="status/game/1" />
            <PlayerPage path="/players/list/:id" />
        </Router>
        </div>
    </div>
    </div>
    </>
);
}

export default App;
