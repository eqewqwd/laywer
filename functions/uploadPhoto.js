// netlify-functions/uploadPhoto.js

exports.handler = async function (event, context) {

  try {
    if (event.httpMethod === "POST") {
      const { base64String , typeProp } = JSON.parse(event.body);
      const binaryData = Buffer.from(base64String, "base64");

      datafix = {
        binaryData,
        typeProp
      }

      return {
        statusCode: 200,
        body: JSON.stringify(datafix),
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "An error occurred" }),
    };
  } 
};
