const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        default:"Admin",
    },
    category:{
        type:String,
        required:true,
    },
    totalView:{
        type:Number,
        default:0
    },
    isLiked:{
        type:Boolean,
        default:false
    },
    isDisliked:{
        type:Boolean,
        default:false
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    dislike:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    image:{
        type:Array,
        default:"../public/images/default/blog1.jpg"
    }
},
    {
        toJSON:{
            virtual:true,
        },
        toObject:{
            virtual:true,
        },
        timestamps:true
    }
);

//Export the model
module.exports = mongoose.model('Blog', blogSchema);