// netlify/functions/uploadPhoto.js
const axios = require('axios');

   // Set up the Shutterfly API endpoint and headers
   const cloudinaryEndpoint = 'https://api.cloudinary.com';
   const apiKey = process.env.SHUTTERFLY_API_KEY;
   const secretKey = process.env.SHUTTERFLY_SECRET_KEY;


exports.handler = async function (event, context) {
    try {
    // Get the photo file from the request
    const photoFile = event.body;        
    const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/ds13xlamk/image/upload`;

    // Make the request to Shutterfly to upload the photo
    const response = await axios.post(cloudinaryUploadUrl, photoFile);


    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to upload photo to Shutterfly.' }),
    };
  }
};
