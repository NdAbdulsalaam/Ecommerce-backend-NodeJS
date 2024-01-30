const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authMidlleware');
const {
    createPost,
    updatePost,
    getPost,
    getPosts,
    deletePost,
    likePost,
    dislikePost,
    uploadPostImage
} = require('../controller/blogCtrl');
const { uploadImage, resizePostImage } = require('../middlewares/imageMiddleware');


router.post('/create', authMiddleware, createPost);
router.put('/update/:id', authMiddleware, updatePost);
router.put('/image/upload/:id', authMiddleware,
        uploadImage.array('images', 3), resizePostImage, uploadPostImage)
router.put('/like/:id', authMiddleware, likePost);
router.put('/dislike/:id', authMiddleware, dislikePost);
router.get('/all', getPosts);
router.get('/:id', getPost);


module.exports = router;