const asyncHandler = require("express-async-handler");
const product = require("../models/productModel");


const createProduct = syncHandler(
    async (req, res) => {
        res.send('Hey these are my products')
    }
)



module.exports = {
    createProduct,
};