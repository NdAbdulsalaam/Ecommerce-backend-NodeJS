const cloudinary = require('cloudinary')
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_KEY, 
  api_secret: process.env.CLOUD_SECRET 
});


const cloudinaryUpload = async (file) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.secure_url, 
                resource_type: "auto"   
            });
        });
    });
};


module.exports = { cloudinaryUpload }