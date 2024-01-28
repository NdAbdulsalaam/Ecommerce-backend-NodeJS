const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');
const {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getCategories
} = require('../controller/blogCatCtrl');


router.post('/create', authMiddleware, isAdmin, createCategory);
router.get('/all', getCategories);
router.put('/update/:id', authMiddleware, isAdmin, updateCategory);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteCategory);
router.get('/:id', getCategory);



module.exports = router;