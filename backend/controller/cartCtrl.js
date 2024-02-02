const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { slugify } = require('slugify');
const { validateMongoDbId } = require('../utils/validateMongoDbId')

const cartModel = require('../models/cartModel');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel')
const couponModel = require('../models/couponModel')


const addToCart = asyncHandler(
    async (req, res) => {
        const { cart } = req.body;
        const currentUserId = req.user._id;
        validateMongoDbId(currentUserId);

        if(!currentUserId) throw new Error("You're not in. Kindly login");
        try{
                let userProducts = [];

                // check if user already added to cart
                const addedByUser = await cartModel.findOne({ orderBy: currentUserId });    
            if (addedByUser) {
                    await cartModel.findOneAndDelete({ orderBy: currentUserId });
                    res.json({ "message": "Document removed successfully" });
            } else {
                for(let i = 0; i < cart.length; i++) {
                    let cartObj = {};
                    cartObj.product = cart[i]._id;
                    cartObj.count = cart[i].count;
                    cartObj.color = cart[i].color;
                    let getPrice = await productModel.findById(cart[i]._id)
                                    .select("price").exec();
                    cartObj.price = getPrice.price;
                    userProducts.push(cartObj);
                }
                    let totalPrice = 0;
                for(let i = 0; i < userProducts.length; i++) {
                    totalPrice = totalPrice + (userProducts[i].price * userProducts[i].count)
                }
                
                let userCart = await new cartModel({
                    products: userProducts,
                    totalBeforeDiscount:totalPrice,
                    orderBy: currentUserId

                }).save();
                res.json(userCart)
            }
                
                
        } catch {
            throw new Error(error)
        }
    }
)

const getCart = asyncHandler(
    async (req, res) => {
        const currentUserId = req.user._id;
        validateMongoDbId(currentUserId);

        if(!currentUserId) throw new Error("You're not in. Kindly login");
       
        try{
            const userCart = await cartModel.findOne({ orderBy: currentUserId })
                                            .populate("products.product")
            res.json(userCart)
        } catch(error) {
            throw new Error(error)
        }
    }
)

const emptyCart = asyncHandler(
    async (req, res) => {
        const currentUserId = req.user._id;
        validateMongoDbId(currentUserId);

        if(!currentUserId) throw new Error("You're not in. Kindly login");
       
        try{
            // const currentUser = userModel.findById(currentUserId);
            const emptyCart = await cartModel.findOneAndDelete({ orderBy:currentUserId });
            res.json({ "message": "Cart empted!"})
        } catch(error) {
            throw new Error(error)
        }
    }
)

const applyCoupon = asyncHandler(
    async (req, res) => {
        const currentUserId = req.user._id;
        const { coupon } = req.body;

        validateMongoDbId(currentUserId);

        if(!currentUserId) throw new Error("You're not in. Kindly login");
        const validCoupon = await couponModel.findOne({ name:coupon })
        if(!validCoupon) throw new Error("Invalid Coupon")
        
        try{
            let { products, totalBeforeDiscount } = await cartModel.findOne(
                { orderBy: currentUserId }
                ).populate("products.product").exec();
            let totalAfterDiscount = (totalBeforeDiscount - (totalBeforeDiscount * (validCoupon.discount/100))).toFixed(2)
            
            await cartModel.findOneAndUpdate(
                { orderBy: currentUserId },
                { totalAfterDiscount: totalAfterDiscount },
                { neew:true }
            ),
            res.json(totalAfterDiscount)
        } catch(error) {
            throw new Error(error)
        }
    }
)

 
module.exports = {
    addToCart,
    getCart,
    emptyCart,
    applyCoupon
}