const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');
const {
    createCoupon,
    getCoupon,
    getCoupons,
    updateCoupon,
    deleteCoupon,
} = require('../controller/couponCtrl');


router.post('/create', authMiddleware, isAdmin, createCoupon);
router.get('/get/all', authMiddleware, isAdmin, getCoupons);
router.put('/update/:id', authMiddleware, isAdmin, updateCoupon);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteCoupon);
router.get('/get/:id', getCoupon); // this is user's id



module.exports = router;