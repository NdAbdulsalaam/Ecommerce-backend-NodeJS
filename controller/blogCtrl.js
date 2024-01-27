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
            const getPost = await blogModel.findById(id);
            await blogModel.findByIdAndUpdate(id,
                { $inc: { totalView: 1 }, },
                { new: true}
                )
            res.json(getPost)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const getPosts = expressAsyncHandler(
    async (req, res) => {
        try{
            const getPosts = await blogModel.find();
            res.json(getPosts)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deletePost = expressAsyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const deletePost = await blogModel.findByIdAndDelete(id);
            res.json(deletePost);
        } catch(error) {
            throw new Error(error)
        }
    }
)




module.exports = {
    createPost,
    updatePost,
    getPost,
    getPosts,
    deletePost
}