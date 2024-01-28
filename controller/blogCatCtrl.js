const asyncHandler = require("express-async-handler");
const blogCatModel = require("../models/blogCatModel");


const createCategory = asyncHandler(
    async (req, res) => {
        try{
            const newCategory = await blogCatModel.create(req.body);
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
            const getCategory  = await blogCatModel.findById(id)
            getCategory? res.json(getCategory): res.send("Record not Found");
        } catch(error) {
            throw new Error(error);
        }
    }
)

const getCategories = asyncHandler(
    async (req, res) => {
       try {
            const getCategories = await blogCatModel.find();
            getCategories? res.json(getCategories): res.send("Record not Found");
       } catch(error){
            throw new Error(error)
       }
    });

const updateCategory = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const updateCategory = await blogCatModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true })
            updateCategory? res.json(updateCategory): res.send("Record not Found");
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deleteCategory = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const deleteCategory = await blogCatModel.findByIdAndDelete(id)
            deleteCategory? res.send('Category deleted successfully'): res.send("Record not Found");
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
    getCategories,
}