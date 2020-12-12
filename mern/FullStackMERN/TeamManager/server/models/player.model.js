const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: [true,"Name is required."],
            minlength: [2,"Name should be 2 characters at least."]
        },
        position:{
            type:String,
        },
        status:{
            type:String,
            default:"Undecided"
        }

    },{timestamps:true}
);


module.exports.Player = mongoose.model('Player', PlayerSchema);