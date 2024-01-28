const asyncHandler = require("express-async-handler");


const blogModel = require("../models/blogModel");



const createPost = asyncHandler(
    async (req, res) => {
        try{
            const newPost = await blogModel.create(req.body);
            res.json(newPost)
        } catch(error) {
            throw new Error(error)
        }

    }
)

const updatePost = asyncHandler(
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

const getPost = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const getPost = await blogModel.findById(id)
            .populate("like")
            .populate("dislike");
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

const getPosts = asyncHandler(
    async (req, res) => {
        try{
            const getPosts = await blogModel.find();
            res.json(getPosts)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deletePost = asyncHandler(
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

const likePost = asyncHandler(
    async (req, res) => {
        const  postId = req.params.id;
        // Fetch liked post
        const currentPost = await blogModel.findById(postId);
        if(!currentPost) throw new Error("Can't retrieve post. It is either deleted or doesn't exist")
        // Fetch user that liked it
        const currentUserId = req.user._id;
        if(!currentUserId) throw new Error("You're not in. You need to login to like posts");

        // Check if post has been disliked by user and remove
        const dislikedByUser = currentPost.dislike?.find(
            (userId) => userId?.toString() === currentUserId.toString()
        );
        if(dislikedByUser) {
                await blogModel.findByIdAndUpdate(
                postId,
                { 
                    $pull: {dislike: currentUserId},
                    isDisliked: false
                },
                { new:true }
            )
        } 
        // Check if post has been liked by user and remove. If not, like!
        const likedByUser = currentPost.isLiked;
        if(likedByUser) {
            const currentPost = await blogModel.findByIdAndUpdate(
                postId,
                { 
                    $pull: {like: currentUserId},
                    isLiked: false
                },
                { new:true }
            )
            res.json(currentPost)
        } else {
            const currentPost = await blogModel.findByIdAndUpdate(
                postId,
                { 
                    $push: {like: currentUserId},
                    isLiked: true
                },
                { new:true }
            )
            res.json(currentPost)
        }
    }
)

const dislikePost = asyncHandler(
    async (req, res) => {
        const  postId = req.params.id;
        // Fetch liked post
        const currentPost = await blogModel.findById(postId);
        if(!currentPost) throw new Error("Can't retrieve post. It is either deleted or doesn't exist")
        // Fetch user that liked it
        const currentUserId = req.user._id;
        if(!currentUserId) throw new Error("You're not in. You need to login to like posts");

        // Check if post has been disliked by user and remove
        const likedByUser = currentPost.like?.find(
            (userId) => userId?.toString() === currentUserId.toString()
        );
        if(likedByUser) {
            await blogModel.findByIdAndUpdate(
            postId,
            { 
                $pull: {like: currentUserId},
                isLiked: false
            },
            { new:true }
        )
        }
        // Check if post has been disliked by user and remove. if not, dislike!
        const dislikedByUser = currentPost.isDisliked;
        if(dislikedByUser) {
            const currentPost = await blogModel.findByIdAndUpdate(
                postId,
                { 
                    $pull: {dislike: currentUserId},
                    isDisliked: false
                },
                { new:true }
            )
            res.json(currentPost)
        } else {
            const currentPost = await blogModel.findByIdAndUpdate(
                postId,
                { 
                    $push: {dislike: currentUserId},
                    isDisliked: true
                },
                { new:true }
            )
            res.json(currentPost)
        }
    }
)


module.exports = {
    createPost,
    updatePost,
    getPost,
    getPosts,
    deletePost,
    likePost,
    dislikePost
}