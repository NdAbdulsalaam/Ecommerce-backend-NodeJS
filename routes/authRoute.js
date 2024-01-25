const express = require('express');
const router = express.Router();

const {
    RegisterUser,
    loginUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMidlleware');


router.post('/register', RegisterUser);
router.post('/login', loginUser);
router.get('/users', getUsers);
router.get('/user/:id', authMiddleware, isAdmin, getUser);
router.put('/update', authMiddleware, updateUser);
router.delete('/delete/:id', deleteUser);


module.exports = router;