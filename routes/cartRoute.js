const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authMidlleware');
const {
    addToCart,
    getCart
} = require('../controller/cartCtrl');

router.post('/add/:id', authMiddleware, addToCart); 
router.get('/get/:id', authMiddleware, getCart);


module.exports = router