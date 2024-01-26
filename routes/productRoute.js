const express = require('express');
const router = express.Router();

const { createProduct } = require('../controller/productCtrl');


router.post('/procducts', createProduct)


module.exports = router