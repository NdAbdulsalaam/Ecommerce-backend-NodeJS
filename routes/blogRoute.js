const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authMidlleware');
const {
    createPost,
    updatePost,
    getPost
} = require('../controller/blogCtrl');


router.post('/create', authMiddleware, createPost);
router.put('/update/:id', authMiddleware, updatePost)
router.get('/:id', getPost)
module.exports = router;