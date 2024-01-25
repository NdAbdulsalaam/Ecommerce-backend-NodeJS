const user = require('../models/userModel');
const asyncHandler = require('express-async-handler')


const createUser = asyncHandler(
    async (req, res) => {
        const { email, mobile } = req.body;
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

const loginUser = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        // Check if user exist
        const findEmail = await user.findOne({ email });
        if (findEmail && await findEmail.checkPassword(password)) {
                res.json(findEmail);
        } else {
            throw new Error("Invalid Credentials")
        }
    }
    )

module.exports = { createUser, loginUser }