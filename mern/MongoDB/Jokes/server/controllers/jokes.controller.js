const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req , res) => {
    Joke.find()
    .then(allJokes => res.json({jokes:allJokes}))
    .catch(err => res.json({message:"Error in getting all jokes",error:err}));
};

module.exports.getOneJoke = (req , res) => {
    Joke.findOne({_id:req.params.id})
    .then(OneJoke => res.json({joke:OneJoke}))
    .catch(err => res.json({message:"Error in getting one joke",error:err}));
};

module.exports.createNewJoke = (req , res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({joke:newJoke}))
    .catch(err => res.json({message:"Error in creating new joke",error:err}));
};

module.exports.updateJoke = (req , res) => {
    Joke.findOneAndUpdate({_id:req.params.id},req.body, {new:true})
    .then(updatedJoke => res.json({joke:updatedJoke}))
    .catch(err => res.json({message:"Error in updating a joke",error:err}));
};

module.exports.deleteJoke = (req , res) => {
    Joke.deleteOne({_id:req.params.id})
    .then(result => res.json({result:result}))
    .catch(err => res.json({message:"Error in deleteing a joke",error:err}));
};

