const asyncHandler = require("express-async-handler");
const categoryModel = require("../models/categoryModel");


const createCategory = asyncHandler(
    async (req, res) => {
        try{
            const newCategory = await categoryModel.create(req.body);
            res.json(newCategory)
        } catch(error) {
            throw new Error("This category is taken and category has to be unique. Use another word or phrase")
        }

    }
)

const getCategory = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const getCategory  = await categoryModel.findById(id)
            res.json(getCategory)
        } catch(error) {
            throw new Error(error);
        }
    }
)

const updateCategory = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const updateCategory = await categoryModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true })
            res.json(updateCategory)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deleteCategory = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const deleteCategory = await categoryModel.findByIdAndDelete(id)
            res.send(`Category deleted successfully`)
        } catch(error) {
            throw new Error(error)
        }
    }
)



module.exports ={
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
}