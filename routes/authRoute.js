const express = require('express');
const router = express.Router();

const {
    RegisterUser,
    loginUser,
    logoutUser,
    refreshToken,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    blockUser,
    unblockUser,
} = require('../controller/userCtrl');

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');


router.post('/register', RegisterUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/users', getUsers);
router.get('/user/refresh-token', refreshToken);
router.put('/user/update', authMiddleware, updateUser);
router.delete('/user/delete/:id', deleteUser);
router.put('/user/block/:id', authMiddleware, isAdmin, blockUser);
router.put('/user/unblock/:id', authMiddleware, isAdmin, unblockUser);
router.get('/user/:id', authMiddleware, isAdmin, getUser);


module.exports = router;