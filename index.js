const express = require('express');
const app = express();
const dbConnect = require("./config/dbConnect");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 400;
const authRouter = require('./routes/authRoute');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

dbConnect()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', authRouter);

app.use(notFound)
app.use(errorHandler) 







app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
});