const mongoose= require("mongoose")


function connectToDb(){
    mongoose.connect("mongodb+srv://arnanil:PHVog210DeVe3b5A@cluster0.hibthns.mongodb.net/day-7")
    .then(()=>{
        console.log("Connected to DB")
    })
}

module.exports = connectToDb