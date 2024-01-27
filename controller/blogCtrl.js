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

const updatePost = expressAsyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const updatePost = await blogModel.findByIdAndUpdate(id,
                req.body,
                { new:true })
            res.json(updatePost)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const getPost = expressAsyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const currentPost = await blogModel.findById(id);
            await blogModel.findByIdAndUpdate(id,
                { $inc: { totalView: 1 }, },
                { new: true}
                )
            res.json(currentPost)
        } catch(error) {
            throw new Error(error)
        }
    }
)

module.exports = {
    createPost,
    updatePost,
    getPost,
}