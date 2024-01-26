const express = require('express');
const router = express.Router();

const { createProduct, findProduct } = require('../controller/productCtrl');


router.post('/create', createProduct)
router.get('/:id', findProduct)


module.exports = router