const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rateProduct
} = require('../controller/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMidlleware');

router.post('/create', authMiddleware, isAdmin, createProduct)
router.get('/all', getProducts)
router.put('/wishlist/add/:id', authMiddleware, addToWishlist)
router.put('/rate/:id', authMiddleware, rateProduct)
router.put('/update/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct)
router.get('/:id', getProduct)
 

module.exports = router