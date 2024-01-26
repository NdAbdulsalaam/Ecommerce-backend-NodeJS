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

router.post('/create', isAdmin, createProduct)
router.get('/products', getProducts)
router.get('/update/:id', isAdmin, authMiddleware, updateProduct)
router.get('/delete/:id', isAdmin, authMiddleware, deleteProduct)
router.get('/:id', getProduct)


module.exports = router