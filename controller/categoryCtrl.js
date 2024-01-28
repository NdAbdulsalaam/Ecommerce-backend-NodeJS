const expressAsyncHandler = require("express-async-handler");
const categoryModel = require("../models/categoryModel");


const createCategory = expressAsyncHandler(
    async (req, res) => {
        try{
            const newCategory = await categoryModel.create(req.body);
            res.json(newCategory)
        } catch(error) {
            throw new Error(error)
        }

    }
)


module.exports ={
    createCategory
}