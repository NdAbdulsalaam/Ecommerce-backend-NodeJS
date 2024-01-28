const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const morgan = require('morgan')
const PORT = process.env.PORT || 400;

const dbConnect = require("./config/dbConnect");

const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const categoryRouter = require('./routes/categoryRoute')

const { notFound, errorHandler } = require('./middlewares/errorHandler');


dbConnect()

app.use(morgan('dev'))
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/user', authRouter);
app.use('/product', productRouter);
app.use('/post', blogRouter); //NOTE: POST is used inplace of BLOG in routes & functions
app.use('/category', categoryRouter);

app.use(notFound)
app.use(errorHandler) 




app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
});