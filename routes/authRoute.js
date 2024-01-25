const express = require('express');
const { createUser, loginUser, getUsers } = require('../controller/userCtrl');
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/users', getUsers)

module.exports = router