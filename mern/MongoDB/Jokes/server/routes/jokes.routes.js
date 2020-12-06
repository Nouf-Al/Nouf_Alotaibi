const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes/", JokesController.getAllJokes);
    app.get("/api/jokes/:id", JokesController.getOneJoke);
    app.put("/api/jokes/update/:id", JokesController.updateJoke);
    app.post("/api/jokes/new", JokesController.createNewJoke);
    app.delete("/api/jokes/delete/:id", JokesController.deleteJoke);
};
