const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');
const {
    createBrand,
    updateBrand,
    deleteBrand,
    getBrand,
    getBrands,
} = require('../controller/brandCtrl');


router.post('/create', authMiddleware, isAdmin, createBrand);
router.get('/all', getBrands);
router.put('/update/:id', authMiddleware, isAdmin, updateBrand);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteBrand);
router.get('/get/:id', getBrand);



module.exports = router;