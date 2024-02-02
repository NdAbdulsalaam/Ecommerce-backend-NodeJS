const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authMidlleware');
const {
    addToCart,
    getCart,
    emptyCart,
    applyCoupon
} = require('../controller/cartCtrl');

router.post('/add/:id', authMiddleware, addToCart); 
router.get('/get/:id', authMiddleware, getCart);
router.delete('/delete/:id', authMiddleware, emptyCart);
router.put('/coupon/apply/:id', authMiddleware, applyCoupon);


module.exports = router