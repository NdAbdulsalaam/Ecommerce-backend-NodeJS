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
    updatePassword,
} = require('../controller/userCtrl');

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');


router.post('/register', RegisterUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/users', getUsers);
router.get('/refresh-token', refreshToken);
router.put('/update-password', authMiddleware, updatePassword);
router.put('/update/:id', authMiddleware, updateUser);
router.delete('/delete/:id', authMiddleware, deleteUser);
router.put('/block/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock/:id', authMiddleware, isAdmin, unblockUser);
router.get('/:id', authMiddleware, getUser);


module.exports = router;