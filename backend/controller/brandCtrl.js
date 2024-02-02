const asyncHandler = require("express-async-handler");
const brandModel = require("../models/brandModel");


const createBrand = asyncHandler(
    async (req, res) => {
        try{
            const newBrand = await brandModel.create(req.body);
            res.json(newBrand)
        } catch(error) {
            throw new Error("This Brand is taken and category has to be unique. Use another word or phrase")
        }

    }
)

const getBrand = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const getBrand  = await brandModel.findById(id)
            getBrand? res.json(getBrand): res.send("Record not Found");
        } catch(error) {
            throw new Error(error);
        }
    }
)

const getBrands = asyncHandler(
    async (req, res) => {
       try {
            const getBrands = await brandModel.find();
            getBrands? res.json(getBrands): res.send("Record not Found");
       } catch(error){
            throw new Error(error)
       }
    });

const updateBrand = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const updateBrand = await brandModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true })
            updateBrand? res.json(updateBrand): res.send("Record not Found");
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deleteBrand = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const deleteBrand = await brandModel.findByIdAndDelete(id)
            deleteBrand? res.send('Brand deleted successfully'): res.send("Record not Found");
        } catch(error) {
            throw new Error(error)
        }
    }
)



module.exports ={
    createBrand,
    updateBrand,
    deleteBrand,
    getBrand,
    getBrands,
}