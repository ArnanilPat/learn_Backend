const mongoose = require("mongoose");
const app = require("./src/app");

mongoose.connect("mongodb+srv://arnanil:PHVog210DeVe3b5A@cluster0.hibthns.mongodb.net/day-8?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(err => {
    console.error("DB connection error:", err);
});
