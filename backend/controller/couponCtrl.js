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

const getCoupon = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.body;
            const getCoupon  = await couponModel.findById(id)
            getCoupon? res.json(getCoupon): res.send("Record not Found");
        } catch(error) {
            throw new Error(error);
        }
    }
)

const getCoupons = asyncHandler(
    async (req, res) => {
       try {
            const getCoupons = await couponModel.find();
            getCoupons? res.json(getCoupons): res.send("Record empty");
       } catch(error){
            throw new Error(error)
       }
    });

const updateCoupon = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const updateCoupon = await couponModel.findByIdAndUpdate(
                id,
                {
                    "name": req?.body?.name,
                    "expiry": req?.body?.expiry,
                    "discount": req?.body?.discount,
                },
                { new: true })
                updateCoupon? res.json(updateCoupon): res.send("Coupon not Found");
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deleteCoupon = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const deleteCoupon = await couponModel.findByIdAndDelete(id)
            deleteCoupon? res.send('Coupon deleted successfully'): res.send("Coupon not Found");
        } catch(error) {
            throw new Error(error)
        }
    }
)



module.exports ={
    createCoupon,
    getCoupon,
    getCoupons,
    updateCoupon,
    deleteCoupon,
}