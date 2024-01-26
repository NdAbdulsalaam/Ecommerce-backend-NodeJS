const express = require('express');
const router = express.Router();

const { createProduct, getProduct, getProducts } = require('../controller/productCtrl');


router.post('/create', createProduct)
router.get('/products', getProducts)
router.get('/:id', getProduct)


module.exports = router