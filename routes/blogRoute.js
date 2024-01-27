const express = require('express');
const router = express.Router();

const { createPost, updatePost } = require('../controller/blogCtrl');
const { authMiddleware } = require('../middlewares/authMidlleware');


router.post('/create', authMiddleware, createPost);
router.put('/update/:id', authMiddleware, updatePost)

module.exports = router;