const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');
const {
    createCategory
} = require('../controller/categoryCtrl');


router.post('/create', authMiddleware, isAdmin, createCategory);


module.exports = router;