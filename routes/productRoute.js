const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require('../controller/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMidlleware');

router.post('/create', authMiddleware, isAdmin, createProduct)
router.get('/products', getProducts)
router.put('/update/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct)
router.get('/:id', getProduct)
 

module.exports = router