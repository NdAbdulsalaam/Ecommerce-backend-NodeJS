const express = require('express');
const { RegisterUser, loginUser, getUsers, getUser } = require('../controller/userCtrl');
const router = express.Router();

router.post('/register', RegisterUser);
router.post('/login', loginUser);
router.get('/users', getUsers);
router.get('/user/:id', getUser);

module.exports = router