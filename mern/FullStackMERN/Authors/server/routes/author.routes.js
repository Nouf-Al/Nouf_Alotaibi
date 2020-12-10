const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAll);
    app.get('/api/author/:id', AuthorController.getOne);
    app.post('/api/author', AuthorController.create);
    app.put('/api/author/:id', AuthorController.update);
    app.delete('/api/author/:id', AuthorController.delete);
    

}
