const express = require('express');
const router = express.Router();

const { createPost } = require('../controller/blogCtrl');
const { authMiddleware } = require('../middlewares/authMidlleware');


router.post('/create', authMiddleware, createPost);


module.exports = router;