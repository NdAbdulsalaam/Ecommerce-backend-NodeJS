const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');
const {
    createColor,
    updateColor,
    deleteColor,
    getColor,
    getColors,
} = require('../controller/colorCtrl');


router.post('/create', authMiddleware, isAdmin, createColor);
router.get('/all', getColors);
router.put('/update/:id', authMiddleware, isAdmin, updateColor);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteColor);
router.get('/:id', getColor);



module.exports = router;