const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    rateProduct,
    addComment,
    uploadProdImage,
    deleteProdImage
} = require('../controller/productCtrl');
const { isAdmin, authMiddleware } = require('../middlewares/authMidlleware');
const { uploadImage, resizeProdImage } = require('../middlewares/imageMiddleware');

router.post('/create', authMiddleware, isAdmin, createProduct)
router.get('/all', getProducts)
router.put('/image/upload', authMiddleware, isAdmin,
        uploadImage.array('images', 10), resizeProdImage, uploadProdImage)
router.put('/rate/:id', authMiddleware, rateProduct)
router.put('/comment/:id', authMiddleware, addComment)
router.put('/update/:id', authMiddleware, isAdmin, updateProduct)
router.delete('/delete/:id', authMiddleware, isAdmin, deleteProduct)
router.delete('/image/delete/:id', authMiddleware, isAdmin, deleteProdImage)
router.get('/get/:id', getProduct)
 

module.exports = router