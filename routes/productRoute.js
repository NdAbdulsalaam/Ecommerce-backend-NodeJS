const express = require('express');
const router = express.Router();

const { createProduct } = require('../controller/productCtrl');


router.post('/products', createProduct)


module.exports = router