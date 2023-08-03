// netlify/functions/uploadPhoto.js
const axios = require('axios');

   // Set up the Shutterfly API endpoint and headers
   const shutterflyEndpoint = 'https://api.shutterfly.com';
   const apiKey = process.env.SHUTTERFLY_API_KEY;
   const secretKey = process.env.SHUTTERFLY_SECRET_KEY;


exports.handler = async function (event, context) {
    try {
    // Get the photo file from the request
    const photoFile = event.body;

    const headers = {
      'Content-Type': 'image/jpeg', // Adjust content type accordingly
      'Authorization': `Bearer ${apiKey}:${secretKey}`,
    };
        

    // Make the request to Shutterfly to upload the photo
    const response = await axios.post(`${shutterflyEndpoint}/upload/photo`, photoFile, { headers });


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
