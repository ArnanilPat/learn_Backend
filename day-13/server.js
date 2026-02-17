require('dotenv').config();
const connectDB = require('./src/config/database');
const app = require('./src/app');   
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);


connectDB();    







app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 