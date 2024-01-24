const user = require('../models/userModel');
const asyncHandler = require('express-async-handler')


const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email;
        const findUser = await user.findOne({ email: email });
        if (!findUser) {
            // create a new user
            const newUser = user.create(req.body);
            res.json(newUser)
    
        } else{
            // User already exist
           throw new Error('User Already Exist')
        }
    }
)

module.exports = { createUser }