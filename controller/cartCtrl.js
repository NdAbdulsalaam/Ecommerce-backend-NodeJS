const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const cartModel = require('../models/cartModel');



const addToCart= asyncHandler(
    async (req, res) => {
 res.json("Hello word!")
    }
)


module.exports = {
    addToCart,
}