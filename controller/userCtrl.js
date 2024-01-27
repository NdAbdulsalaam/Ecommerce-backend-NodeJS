const userModel = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwtToken');
const { generateRefreshToken } = require('../config/jwtRefreshToken');
const { validateMongoDbId } = require('../utils/validateMongoDbId');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('./emailCtrl');


const RegisterUser = asyncHandler(
    async (req, res) => {
        const { email, mobile } = req.body;
        const findEmail = await userModel.findOne({ email: email });
        const findMobile = await userModel.findOne({ mobile: mobile });

        if (!findEmail && !findMobile) {
            // create a new user
            const newUser = userModel.create(req.body);
            res.json(newUser)
    
        } else if (findEmail) {
            // User already exist
           throw new Error('User Already Exist. This email has been used')
        } else {
            throw new Error('User Already Exist. This Mobile number has been used')
        }
    }
)

const loginUser = asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        // Check if user exist
        const findUser = await userModel.findOne({ email });
        if (findUser && await findUser.checkPassword(password)) {
            const refreshToken = await generateRefreshToken(findUser._id)
            const updateUser = await userModel.findOneAndUpdate(
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
        const { refreshToken } = req.cookies;
        if(!refreshToken) throw new Error("No refersh token found");
        const findUser = await userModel.findOne({ refreshToken });
        if(!findUser) {
            res.clearCookie('refreshToken', {
                httpOnly: true,
                secure: true,
            });
            res.sendStatus(204) //forbidden
        } else {
            await userModel.findOneAndUpdate({refreshToken}, {
                refreshToken: "",
            }, { new: true });
            res.clearCookie('refreshToken', {
                httpOnly: true,
                secure: true,
            });
            res.sendStatus(204);
        }
    });

const refreshToken = asyncHandler(
    async (req, res) => {
        const { refreshToken } = req.cookies;
        if(!refreshToken) throw new Error("No refresh token found. Please login!");
        const findUser = await userModel.findOne({ refreshToken });
        if(!findUser) throw new Error("User does not exist. Please sign-up");
        jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
            if(err || findUser.id !== decoded.id) {
                throw new Error("Refresh token not match user");
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
            const getUser = await userModel.findById(id);
            res.json(getUser)
       } catch(error) {
            throw new Error(error)
       }
    });


const getUsers = asyncHandler(
    async (req, res) => {
       try {
            const getUsers = await userModel.find();
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
            const updateUser = await userModel.findByIdAndUpdate(_id, {
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
            const { _id } = req.user;
            validateMongoDbId(_id)
            const deleteUser = await userModel.findByIdAndDelete(_id)
            res.send(`User deleted successfully`)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const updatePassword = asyncHandler(
    async (req, res) => {
        const { _id } = req.user;
        const { password } = req.body;
        validateMongoDbId(_id)
        const currentUser = await userModel.findById(_id);
        if(password) {
            currentUser.password =  password
            const updatePassword = await currentUser.save();
            res.json(updatePassword);
        }

    }
)

const forgotPassword = asyncHandler(
    async (req, res) => {
        const { email } = req.body;
        const currentUser = await userModel.findOne({ email });
        if(!currentUser) throw new Error("Email not registered. signup")
        
        if(currentUser) {
            try{
                const resetToken = await currentUser.generatePasswordResetToken();
                await currentUser.save() 
                const resetURL = `http://localhost:5000/user/password/forgot/${resetToken}`
                const resetMessage =`Please click <a href=${resetURL}>here</a> to reset password`
                const data = {
                    to: email,
                    subject: "Link: Forgot password reset",
                    html: resetMessage,
                    text: "Link valid for 24 hours from now!"
                };
                sendEmail(data);

                res.json(resetToken)                 
            } catch(error) {
                throw new Error(error)
            }
        }

    }
)

// Admin Only section
const blockUser = asyncHandler(
    async (req, res) => {
        const { _id } = req.user;
        validateMongoDbId(_id)
        try{
            const blockUser = await userModel.findByIdAndUpdate(_id, {
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
        const { _id } = req.user;
        validateMongoDbId(_id)
        try{
            const unblockUser = await userModel.findByIdAndUpdate(_id, {
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
    updatePassword,
    forgotPassword,
}