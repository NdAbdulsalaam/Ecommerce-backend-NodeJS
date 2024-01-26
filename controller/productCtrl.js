const asyncHandler = require("express-async-handler");
const sluglify = require('slugify');

const product = require("../models/productModel");
const { default: slugify } = require("slugify");


const createProduct = asyncHandler(
    async (req, res) => {
        try{
            if(req.body.title) {
                req.body.slug = slugify(req.body.title)
            }
            const newProduct = await product.create(req.body);
            res.json(newProduct)

        } catch(error) {
            throw new Error(error)
        }
    }
)

const getProduct = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const findProduct = await product.findById(id)
            res.json(findProduct)
        } catch(error) {
            throw new Error(error);
        }
    }
)

const getProducts = asyncHandler(
    async (req, res) => {
       try{
            const allProducts = await product.find()
            res.json(allProducts)
       } catch(error) {
            throw new Error(error)
       }
    }
)



module.exports = {
    createProduct,
    getProduct,
    getProducts
};