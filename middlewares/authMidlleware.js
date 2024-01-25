const user = require('../models/userModel');
const jwt = require('jsonwebtoken');
const  asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler (
    async (req, res, next) => {
        let token;
        if(req?.headers?.authorization?.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1]
            try {
                if(token) {
                    const decoded = jwt.verify(token, process.env.JWT_SECRET);
                    const findUser = await user.findById(decoded.id);
                    req.user = findUser;
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

module.exports = { authMiddleware };