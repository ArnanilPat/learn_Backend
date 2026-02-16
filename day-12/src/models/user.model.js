const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({        //To tell the format
    name:String,
    email:{
        type:String,
        unique:[true,"with this email user account already exists"]
    },
    password:String,
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel;