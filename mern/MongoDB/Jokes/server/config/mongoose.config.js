const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/name_here",{
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
    .then(()=> console.log("connected to database"))
    .catch(err=>console.log("error in database connection",err));