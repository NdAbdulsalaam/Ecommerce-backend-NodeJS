const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');
const {
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controller/categoryCtrl');


router.post('/create', authMiddleware, isAdmin, createCategory);
router.put('/update/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteCategory);



module.exports = router;