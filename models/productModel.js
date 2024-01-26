const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        lowercase:true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    brand: {
        type:String,
        enum:["Apple", "Samsung", "Hp", "Dell", "Lenovo"]
    },
    sold: {
        type:Number,
        default:0,
    },
    quantity: {
        type:Number,
        require:true
    },
    image: {
        type:[]
    },
    color: {
        type:String,
        enum:["Blue", "Black", "White", "Green", "Orange"]
    },
    rating: {
        star:Number,
        postedBy: {type:mongoose.Schema.Types.ObjectId, ref:"user" }
    }
},
    {timestamps:true}
);

//Export the model
module.exports = mongoose.model('Product', productSchema);
