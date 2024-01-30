
const express = require('express');
const router = express.Router();

const { addToCart } = require('../controller/cartCtrl');
const { authMiddleware } = require('../middlewares/authMidlleware');

router.put('/add/:id', authMiddleware , addToCart);


module.exports = router