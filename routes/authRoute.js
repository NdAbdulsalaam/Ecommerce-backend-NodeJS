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


router.post('/register', RegisterUser);
router.post('/login', loginUser);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);


module.exports = router