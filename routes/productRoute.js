const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require('../controller/productCtrl');


router.post('/create', createProduct)
router.get('/products', getProducts)
router.get('/update/:id', updateProduct)
router.get('/delete/:id', deleteProduct)
router.get('/:id', getProduct)


module.exports = router