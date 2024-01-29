const asyncHandler = require("express-async-handler");
const couponModel = require("../models/couponModel");


const createCoupon = asyncHandler(
    async (req, res) => {
        try{
            const newCoupon = await couponModel.create(req.body);
            res.json(newCoupon)
        } catch(error) {
            throw new Error("This coupon has been used and coupon has to be unique")
        }

    }
)


module.exports ={
    createCoupon,
}