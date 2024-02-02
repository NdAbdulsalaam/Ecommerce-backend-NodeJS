const asyncHandler = require("express-async-handler");
const enquiryModel = require("../models/enquiryModel");


const createEnquiry = asyncHandler(
    async (req, res) => {
        try{
            const newEnquiry = await enquiryModel.create(req.body);
            res.json(newEnquiry)
        } catch(error) {
            throw new Error("This Enquiry is taken and category has to be unique. Use another word or phrase")
        }

    }
)

const getEnquiry = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const getEnquiry  = await enquiryModel.findById(id)
            getEnquiry? res.json(getEnquiry): res.send("Record not Found");
        } catch(error) {
            throw new Error(error);
        }
    }
)

const getEnquiries = asyncHandler(
    async (req, res) => {
       try {
            const getEnquiries = await enquiryModel.find();
            getEnquiries? res.json(getEnquiries): res.send("Record not Found");
       } catch(error){
            throw new Error(error)
       }
    });

    const updateEnquiryStatus = asyncHandler(
        async (req, res) => {
            try{
                const { id } = req.params;
                const updateEnquiry = await enquiryModel.findByIdAndUpdate(
                    id,
                    req.body,
                    { new: true })
                updateEnquiry? res.json(updateEnquiry): res.send("Record not Found");
            } catch(error) {
                throw new Error(error)
            }
        }
    )

const deleteEnquiry = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const deleteEnquiry = await enquiryModel.findByIdAndDelete(id)
            deleteEnquiry? res.send('Enquiry deleted successfully'): res.send("Record not Found");
        } catch(error) {
            throw new Error(error)
        }
    }
)



module.exports ={
    createEnquiry,
    updateEnquiryStatus,
    deleteEnquiry,
    getEnquiry,
    getEnquiries,
}