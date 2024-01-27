const asyncHandler = require("express-async-handler");
const sluglify = require('slugify');

const productModel = require("../models/productModel");
const { default: slugify } = require("slugify");
const { validate } = require("../models/userModel");
const { validateMongoDbId } = require("../utils/validateMongoDbId");


const createProduct = asyncHandler(
    async (req, res) => {
        try{
            if(req.body.title) {
                req.body.slug = slugify(req.body.title)
            }
            const newProduct = await productModel.create(req.body);
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
            const findProduct = await productModel.findById(id)
            res.json(findProduct)
        } catch(error) {
            throw new Error(error);
        }
    }
)

const getProducts = asyncHandler(
    async (req, res) => {
       try{
            // Filtering
            const queryObjs = { ...req.query }
            const excludeFields = ["page", "sort", "limit", "fields"];
            excludeFields.forEach((el) => delete queryObjs[el]);
            let queryString = JSON.stringify(queryObjs);
            // catch >, >=, <, <= using regex 
            queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
            let query = productModel.find(JSON.parse(queryString))

            // Sorting
            if(req.query.sort) {
                const sortBy = req.query.sort.split(",").join(" ")
                query = query.sort(sortBy)
            } else{
                query = query.sort("-updatedAt")
            }

            // Limit by fields
            if(req.query.fields) {
                const fields = req.query.fields.split(",").join(" ")
                query = query.select(fields)
            } else{
                query = query.select("-__v")
            }

            // Pagenation
            if(req.query.page) {
                const page = req.query.page;
                const pageLimit = req.query.limit;
                const pageSkip = (page - 1) * pageLimit
                query = query.skip(pageSkip).limit(pageLimit)

                const productCount = await productModel.countDocuments();
                if(pageSkip >= productCount) throw new Error("This page does not exist")
            }



            // Results
            const queryProducts = await query
            res.json(queryProducts)
       } catch(error) {
            throw new Error(error)
       }
    }
)


const updateProduct = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            validateMongoDbId(id)
            const updateProduct = await productModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true })
            res.json(updateProduct)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deleteProduct = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            validateMongoDbId(id)
            const deleteProduct = await productModel.findByIdAndDelete(id)
            res.send(`Product deleted successfully`)
        } catch(error) {
            throw new Error(error)
        }
    }
)


module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
};