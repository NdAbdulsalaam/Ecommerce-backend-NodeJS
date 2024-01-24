const express = require('express');
const app = express();
const dbConnect = require("./config/dbConnect");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 400;

dbConnect()

app.use('/', (req, res) => {
    res.send("Hello world again!")
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
});