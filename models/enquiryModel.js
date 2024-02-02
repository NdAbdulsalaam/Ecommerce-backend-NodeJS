const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var enquirySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    status: {
        type:String,
        default: "Sent",
        enum: ["Sent", "Recieved", "Read"]
    }
},
    { timestamps:true }
);

//Export the model
module.exports = mongoose.model('Enquiry', enquirySchema);