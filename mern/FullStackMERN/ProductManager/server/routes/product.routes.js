const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.getAll);
    app.get('/api/product/:id', ProductController.getOne);
    app.post('/api/products', ProductController.createNewProduct);
    

}
