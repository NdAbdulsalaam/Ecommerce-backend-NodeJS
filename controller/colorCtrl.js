const asyncHandler = require("express-async-handler");
const colorModel = require("../models/colorModel");


const createColor = asyncHandler(
    async (req, res) => {
        try{
            const newColor = await colorModel.create(req.body);
            res.json(newColor)
        } catch(error) {
            throw new Error("This color has been created and color has to be unique. Use another color")
        }

    }
)

const getColor = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const getColor  = await colorModel.findById(id)
            getColor? res.json(getColor): res.send("Record not Found");
        } catch(error) {
            throw new Error(error);
        }
    }
)

const getColors = asyncHandler(
    async (req, res) => {
       try {
            const getColors = await colorModel.find();
            getColors? res.json(getColors): res.send("Record not Found");
       } catch(error){
            throw new Error(error)
       }
    });

const updateColor = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const updateColor = await colorModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true })
            updateColor? res.json(updateColor): res.send("Record not Found");
        } catch(error) {
            throw new Error(error)
        }
    }
)

const deleteColor = asyncHandler(
    async (req, res) => {
        try{
            const { id } = req.params;
            const deleteColor = await colorModel.findByIdAndDelete(id)
            deleteColor? res.send('Color deleted successfully'): res.send("Record not Found");
        } catch(error) {
            throw new Error(error)
        }
    }
)



module.exports ={
    createColor,
    updateColor,
    deleteColor,
    getColor,
    getColors,
}