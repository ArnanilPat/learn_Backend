const express = require('express');
const app = express();
const authRouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser');

console.log(authRouter);   // ← ADD THIS

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRouter);

module.exports = app;
