const user = require('../models/userModel');
const jwt = require('jsonwebtoken');
const  asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(
    async (req, res, next) => {
        let token;
        if(req?.headers?.authorization?.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1]
            try {
                if(token) {
                    const decoded = jwt.verify(token, process.env.JWT_SECRET);
                    const currentUser = await user.findById(decoded.id);
                    req.user = currentUser;
                    next();
                }

            } catch(error) {
                throw new Error("Not authorized or token expired. Please login again");
            }
        } else {
            throw new Error("This is no token attached to header");
        }
    }
)

const isAdmin = asyncHandler(
    async (req, res, next) => {
        const { email } = req.user
        const findAdmin = await user.findOne({ email })
        if(findAdmin.role == "admin") {
            next();
        } else {
            throw new Error("You're not an admin")
        }
    }
)

module.exports = { authMiddleware, isAdmin };