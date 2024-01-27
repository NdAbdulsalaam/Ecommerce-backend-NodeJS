const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authMidlleware');
const {
    createPost,
    updatePost,
    getPost,
    getPosts,
    deletePost,
    likePost
} = require('../controller/blogCtrl');


router.post('/create', authMiddleware, createPost);
router.put('/update/:id', authMiddleware, updatePost);
router.delete('/delete/:id', authMiddleware, deletePost);
router.put('/like/:id', authMiddleware, likePost);
router.get('/all', getPosts);
router.get('/:id', getPost);


module.exports = router;