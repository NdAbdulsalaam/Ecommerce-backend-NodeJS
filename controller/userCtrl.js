const user = require('../models/userModel');
const asyncHandler = require('express-async-handler')


const createUser = asyncHandler(
    async (req, res) => {
        const email = req.body.email;
        const mobile = req.body.mobile
        const findEmail = await user.findOne({ email: email });
        const findMobile = await user.findOne({ mobile: mobile });

        if (!findEmail && !findMobile) {
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