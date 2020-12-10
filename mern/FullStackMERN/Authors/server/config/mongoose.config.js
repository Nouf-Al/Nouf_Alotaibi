const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/authors_db",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=>console.log("Connected to database successfully"))
    .catch(err => console.log("Error in database connection "+err));