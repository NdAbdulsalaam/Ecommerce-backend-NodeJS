const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { slugify } = require('slugify');
const { validateMongoDbId } = require('../utils/validateMongoDbId')

const cartModel = require('../models/cartModel');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel')


const addToCart = asyncHandler(
    async (req, res) => {
        const { cart } = req.body;
        const currentUserId = req.user._id;
        validateMongoDbId(currentUserId);

        if(!currentUserId) throw new Error("You're not in. Kindly login");
        try{
                let userProducts = [];

                // check if user already added to cart
                const { addedByUser } = await cartModel.findOne({ orderBy: currentUserId });
            console.log(addedByUser)     
            if (addedByUser) {
                try {
                    await addedByUser.remove();
                    console.log('Document removed successfully');
                } catch (error) {
                    console.error('Error removing document:', error);
                }
            }
                
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


module.exports = {
    addToCart,
    getCart
}