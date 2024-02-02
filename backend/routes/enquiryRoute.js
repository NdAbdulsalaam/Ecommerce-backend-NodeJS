const express = require('express');
const router = express.Router();

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');
const {
    createEnquiry,
    getEnquiry,
    getEnquiries,
    updateEnquiryStatus,
    deleteEnquiry,
} = require('../controller/enquiryCtrl');


router.post('/create', authMiddleware, createEnquiry);
router.get('/all', authMiddleware, isAdmin, getEnquiries);
router.put('/update-status/:id', authMiddleware, isAdmin, updateEnquiryStatus);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteEnquiry);
router.get('/:id', authMiddleware, getEnquiry);



module.exports = router;