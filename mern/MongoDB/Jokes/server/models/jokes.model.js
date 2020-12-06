const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        minlength:[10,"should be at least 10 charecters."]
    },
    punchline:{
        type:String,
        minlength:[3,"should be at least 3 charecters."]
    }
},
{timestamps: true});


const Joke = mongoose.model("Jokes", JokeSchema);
module.exports = Joke;