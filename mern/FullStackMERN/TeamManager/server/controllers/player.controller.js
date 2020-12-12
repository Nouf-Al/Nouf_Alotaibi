const { Player } = require("../models/player.model");

class PlayerController {

    create(request, response) {
        Player.create(request.body)
        .then((player) => response.json(player))
        .catch((err) => response.json(err));
    }

    getAll(request, response) {
        Player.find()
        .then((players) => response.json(players))
        .catch((err) => response.json(err));
    }

    getOne(request, response) {
        Player.findOne({ _id: request.params.id })
        .then((player) => response.json(player))
        .catch((err) => response.json(err));
    }
    

    update(request, response) {
        Player.findOneAndUpdate({ _id: request.params.id }, request.body, {
        runValidators: true,
        })
        .then((player) => response.json(player))
        .catch((err) => response.json(err));
    }

    delete(request, response) {
        Player.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch((err) => response.json(err));
    }    
}

module.exports = new PlayerController();
