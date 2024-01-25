const express = require('express');
const router = express.Router();

const {
    RegisterUser,
    loginUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    blockUser,
    unblockUser
} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');


router.post('/register', RegisterUser);
router.post('/login', loginUser);
router.get('/users', getUsers);
router.get('/user/:id', authMiddleware, isAdmin, getUser);
router.put('/user/update', authMiddleware, updateUser);
router.delete('/user/delete/:id', deleteUser);
router.put('/user/block/:id', authMiddleware, isAdmin, blockUser);
router.put('/user/unblock/:id', authMiddleware, isAdmin, unblockUser);


module.exports = router;