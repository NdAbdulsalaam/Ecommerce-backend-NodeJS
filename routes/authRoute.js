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
    forgotPassword,
    resetPassword,
    loginAdmin,
    addToWishlist,
    getWishlist
} = require('../controller/userCtrl');

const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');


router.post('/register', RegisterUser);
router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);
router.get('/logout', logoutUser);
router.get('/all', getUsers);
router.get('/token/refresh', refreshToken);
router.put('/password/update', authMiddleware, updatePassword);
router.put('/password/reset', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.put('/update/:id', authMiddleware, updateUser);
router.put('/wishlist/add/:id', authMiddleware, addToWishlist) // id here is product id
router.get('/wishlist', authMiddleware, getWishlist);
router.delete('/delete/:id', authMiddleware, deleteUser);
router.put('/block/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock/:id', authMiddleware, isAdmin, unblockUser);
router.get('/:id', authMiddleware, getUser);


module.exports = router;