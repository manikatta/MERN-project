const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true 
    },
    mobile:{
        type: String,
        required: true 
    },
    age:{
        type: String,
        required: true,
        unique:true 
    },
    work:{
        type: String,
        required: true 
    },
    address:{
        type: String,
        required: true 
    },
    desc:{
        type: String,
        required: true 
    },
});

const user1 = new mongoose.model("user1", userSchema);

module.exports= user1;