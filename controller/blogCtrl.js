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

const likePost = expressAsyncHandler(
    async (req, res) => {
        const  postId = req.params.id;
        // Fetch liked post
        const currentPost = await blogModel.findById(postId);
        if(!currentPost) throw new Error("Can't retrieve post. It is either deleted or doesn't exist")
        // Fetch user that liked it
        const currentUserId = req.user._id;
        if(!currentUserId) throw new Error("You're not in. You need to login to like posts");
        // Check if post has been disliked by user and remove
        const likedByUser = currentPost.isLiked;
        // Check if post has been disliked by user and remove
        const dislikedByUser = currentPost.dislike?.find(
            (userId) => userId?.toString() === currentUserId.toString()
        );
        if(likedByUser) {
            const currentPost = await blogModel.findByIdAndUpdate(
                postId,
                { 
                    $pull: {like: currentUserId},
                    isLiked: false
                },
                { new:true }
            )
        } else if(dislikedByUser) {
                const currentPost = await blogModel.findByIdAndUpdate(
                postId,
                { 
                    $pull: {dislike: currentUserId},
                    isDisliked: false
                },
                { new:true }
            )
        } else {
            const currentPost = await blogModel.findByIdAndUpdate(
                postId,
                { 
                    $push: {like: currentUserId},
                    isLiked: true
                },
                { new:true }
            )
        }
        res.json(currentPost)
    }
)




module.exports = {
    createPost,
    updatePost,
    getPost,
    getPosts,
    deletePost,
    likePost
}