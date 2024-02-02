const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const uniqid = require('uniqid')

const { validateMongoDbId } = require('../utils/validateMongoDbId')

const cartModel = require('../models/cartModel');
const productModel = require('../models/productModel');
const orderModel = require('../models/orderModel');

const createOrder = asyncHandler(
    async (req, res) => {
        const { order } = req.body;
        const currentUserId = req.user._id;
        validateMongoDbId(currentUserId);
        if(!currentUserId) throw new Error("You're not in. Kindly login");
        const { COD, couponApplied } = req.body;
        if(!COD) throw new Error("Create cash order failed");
        
        try{
            userCart = await cartModel.findOne({ orderBy:currentUserId })
            let totalPrice = 0;
            if (couponApplied && userCart.totalAfterDiscount) {
                totalPrice = userCart.totalAfterDiscount;
            } else {
                totalPrice = userCart.totalBeforeDiscount;
            }
            let newOrder = await new orderModel({
                products: userCart.products,
                paymentIntent: {
                    id: uniqid(),
                    method: COD,
                    amount: totalPrice,
                    status: "Cash on Delivery",
                    created: Date.now(),
                    currency: "NGN"
                },
                orderBy: currentUserId,
                orderStatus: "Received"
            }).save()
            // Increase Amount sold and reduce quantity available
            let updateProduct = userCart.products.map((item) => {
                    return{
                        updateOne: {
                            filter: { currentUserId: item.product._id },
                            update: { $inc: { quantity: -item.count, soild: +item.count }}
                            }
                        }
            })
              const updated = await productModel.bulkWrite (updateProduct, {})
              res.json({ "message": "success"})
        } catch {
            throw new Error(error)
        }
    }
)

const getOrder = asyncHandler(
    async (req, res) => {
        const currentUserId = req.user._id;
        validateMongoDbId(currentUserId);
        if(!currentUserId) throw new Error("You're not in. Kindly login");
        try{
            const userOrders = await orderModel.findOne(
                { orderBy: currentUserId }
                ).populate("products.product").exec();
            res.json(userOrders)
        } catch {
            throw new Error(error)
        }
    }
)

const updateOrderStatus = asyncHandler(
    async (req, res) => {
        const { status } = req.body
        const currentUserId = req.user._id;
        validateMongoDbId(currentUserId);
        if(!currentUserId) throw new Error("You're not in. Kindly login");
        try{
            const updateOrderStatus = await orderModel.findOneAndUpdate(
                { orderBy:currentUserId },
                {
                    orderStatus: status,
                    paymentIntent: {
                        status: status
                    }
                },
                { new:true}
            );
            res.json(updateOrderStatus)
        } catch {
            throw new Error(error)
        }
    }
)

const deleteOrder = asyncHandler(
    async (req, res) => {
        const currentUserId = req.user._id;
        validateMongoDbId(currentUserId);

        if(!currentUserId) throw new Error("You're not in. Kindly login");
       
        try{
            const deleteOrder = await orderModel.findOneAndDelete({ orderBy:currentUserId });
            res.json({ "message": "Order deleted!"})
        } catch(error) {
            throw new Error(error)
        }
    }
)


module.exports = {
    createOrder,
    getOrder,
    updateOrderStatus,
    deleteOrder
}