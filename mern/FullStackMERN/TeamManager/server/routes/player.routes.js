const Players = require('../controllers/player.controller');


module.exports = app => {
    app.get('/api/players', Players.getAll);
    app.post('/api/player', Players.create);
    app.delete('/api/player/:id', Players.delete);
    app.get('/api/player/:id', Players.getOne);
    app.put('/api/player/:id', Players.update);    
}
