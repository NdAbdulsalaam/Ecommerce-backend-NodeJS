const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');
const {
    createCategory,
    updateCategory
} = require('../controller/categoryCtrl');


router.post('/create', authMiddleware, isAdmin, createCategory);
router.put('/update/:id', authMiddleware, updateCategory);

module.exports = router;