const { default: mongoose } = require('mongoose')

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected successfully!")
    } catch(error) {
        console.log('Something went wrong!')
    };
};

module.exports = dbConnect