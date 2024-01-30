const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rateProduct,
    addComment,
    uploadProdImage
} = require('../controller/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMidlleware');
const { uploadImage, resizeProdImage } = require('../middlewares/imageMiddleware');

router.post('/create', authMiddleware, isAdmin, createProduct)
router.get('/all', getProducts)
router.put('/image/upload/:id', authMiddleware, isAdmin,
        uploadImage.array('images', 10), resizeProdImage, uploadProdImage)
router.put('/wishlist/add/:id', authMiddleware, addToWishlist)
router.put('/rate/:id', authMiddleware, rateProduct)
router.put('/comment/:id', authMiddleware, addComment)
router.put('/update/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct)
router.get('/:id', getProduct)
 

module.exports = router