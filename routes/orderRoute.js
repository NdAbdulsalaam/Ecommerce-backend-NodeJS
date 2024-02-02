const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');
const {
    createOrder,
    getOrder,
    updateOrderStatus,
    deleteOrder
} = require('../controller/orderCtrl');

router.post('/create/:id', authMiddleware, createOrder); 
router.put('/update-status/:id', authMiddleware, isAdmin, updateOrderStatus); 
router.delete('/delete/:id', authMiddleware, isAdmin, deleteOrder); 
router.get('/:id', authMiddleware, getOrder); 


module.exports = router