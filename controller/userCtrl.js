const user = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');


const RegisterUser = asyncHandler(
    async (req, res) => {
        const { email, mobile } = req.body;
        const findEmail = await user.findOne({ email: email });
        const findMobile = await user.findOne({ mobile: mobile });

        if (!findEmail && !findMobile) {
            // create a new user
            const newUser = user.create(req.body);
            res.json(req.body)
    
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
        const findUser = await user.findOne({ email });
        if (findUser && await findUser.checkPassword(password)) {
                res.json({
                    _id: findUser?._id,
                    firstname: findUser?.firstname,
                    lastname: findUser?.lastname,
                    email: findUser?.email,
                    mobile: findUser?.mobile,
                    token: generateToken(findUser?._id)
        })
        } else {
            throw new Error("Invalid Credentials")
        }
    })

const getUser = asyncHandler(
    async (req, res) => {
        try {
            const { id } = req.params;
            const findUser = await user.findById(id);
            res.json(findUser)
       } catch(error) {
            throw new Error(error)
       }
    });


const getUsers = asyncHandler(
    async (req, res) => {
       try {
            const allUsers = await user.find();
            res.json(allUsers)
       } catch(error){
            throw new Error(error)
       }
    });

const updateUser = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const findUser = await user.findByIdAndUpdate(id, {
                firstname: req?.body?.firstname,
                lastname: req?.body?.lastname,
                email: req?.body?.email,
                mobile: req?.body?.mobile,
                role: req?.body?.role,
            }, { new: true })
            res.json(findUser)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deleteUser = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const findUser = await user.findByIdAndDelete(id)
            res.send(`User deleted successfully`)
        } catch(error) {
            throw new Error(error)
        }
    }
)

module.exports = {
    RegisterUser,
    loginUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}