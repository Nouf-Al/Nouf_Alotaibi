import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from "@reach/router";
import Main from "./views/Main";
import AuthorForm from "./components/AuthorForm";
import { useState } from "react";
import Update from "./views/Update";

function App() {
    const [name, setName] = useState("");

    return (
        <div className="App">
            <div className="container">
                <div className="jumbotron m-5 ">
                    <h2 className="text-left m-3 mb-5">Favorite Authors</h2>
                <Router>
                    <Main path="/"/>
                    <AuthorForm path="/new" name={name} setName={setName} />
                    <Update path="author/:id/edit" name={name} setName={setName}/>
                </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
