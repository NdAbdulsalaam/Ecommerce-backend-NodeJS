const expressAsyncHandler = require("express-async-handler");
const { validateMongoDbId } = require("../utils/validateMongoDbId");

const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");


const createPost = expressAsyncHandler(
    async (req, res) => {
        try{
            const newPost = await blogModel.create(req.body);
            res.json(newPost)
        } catch(error) {
            throw new Error(error)
        }

    }
)

module.exports = {
    createPost
}