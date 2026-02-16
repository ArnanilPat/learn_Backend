require('dotenv').config()

const app =require('./src/app')

const connectToDb = require("./src/config/database")


require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); //code: 'ECONNREFUSED',




connectToDb()




app.listen(3000,()=>{
    console.log("server is running on port 3000");
})