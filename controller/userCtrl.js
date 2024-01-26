const user = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');
const { generateRefreshToken } = require('../config/jwtRefreshToken');
const { validateMongoDbId } = require('./utils/validateMongoDbId');
const jwt = require('jsonwebtoken');


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
            const refreshToken = await generateRefreshToken(findUser._id)
            const updateUser = await user.findOneAndReplace(
                findUser._id, {
                refreshToken: refreshToken,
            }, { new: true });
            res.cookie('refreshToken', refreshToken,{
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            });
                res.json({
                    _id: findUser._id,
                    firstname: findUser?.firstname,
                    lastname: findUser?.lastname,
                    email: findUser.email,
                    mobile: findUser?.mobile,
                    token: generateToken(findUser?._id)
        })
        } else {
            throw new Error("Invalid Credentials")
        }
    })

const logoutUser = asyncHandler(
    async (req, res) => {

    }
)

const refreshToken = asyncHandler(
    async (req, res) => {
        const { refreshToken } = req.cookies;
        if(!refreshToken) throw new Error("No refersh token found");
        const findUser = await user.findOne({ refreshToken });
        if(!findUser) throw new Error("Invalid refresh token");
        jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
            if(err || findUser.id !== decoded.id) {
                throw new Error("Refesh token not match user");
            } else {
                const accessToken = generateToken(findUser._id)
                res.json(accessToken)
            }
        })
    }
)

const getUser = asyncHandler(
    async (req, res) => {
        try {
            const { id } = req.params;
            validateMongoDbId(id)
            const getUser = await user.findById(id);
            res.json(getUser)
       } catch(error) {
            throw new Error(error)
       }
    });


const getUsers = asyncHandler(
    async (req, res) => {
       try {
            const getUsers = await user.find();
            res.json(getUsers)
       } catch(error){
            throw new Error(error)
       }
    });

const updateUser = asyncHandler(
    async (req, res) => {
        try{
            const { _id } = req.user;
            validateMongoDbId(_id)
            const updateUser = await user.findByIdAndUpdate(_id, {
                firstname: req?.body?.firstname,
                lastname: req?.body?.lastname,
                email: req?.body?.email,
                mobile: req?.body?.mobile,
                role: req?.body?.role,
            }, { new: true })
            res.json(updateUser)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deleteUser = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            validateMongoDbId(id)
            const deleteUser = await user.findByIdAndDelete(id)
            res.send(`User deleted successfully`)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const blockUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        validateMongoDbId(id)
        try{
            const blockUser = await user.findByIdAndUpdate(id, {
                isBlocked: true
            }, { new: true })
            res.send("User blocked!")
        } catch(error) {
            throw new Error(error)
        }
    }
)

const unblockUser = asyncHandler(
    async (req, res) => {
        const { id } = req.params;
        validateMongoDbId(id)
        try{
            const unblockUser = await user.findByIdAndUpdate(id, {
                isBlocked: false
            }, { new: true })
            res.send("User unblocked!")
        } catch(error) {
            throw new Error(error)
        }
    }
)


module.exports = {
    RegisterUser,
    loginUser,
    refreshToken,
    logoutUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    blockUser,
    unblockUser,
}