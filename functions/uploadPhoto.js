// netlify-functions/uploadPhoto.js
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority";

exports.handler = async function(event, context) {
    try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db('lawyerWeb');
    const collection = db.collection('images');

    // Parse the incoming base64 image data
    const imageData = JSON.parse(event.body).image;
    return {
        statusCode: 200,
        body: JSON.stringify(imageData),
    };
    const buffer = Buffer.from(imageData, 'base64');
   
    // Insert the image into MongoDB
    const result = await collection.insertOne({ image: buffer });

    client.close();

    // return {
    //   statusCode: 200,
    //   body: JSON.stringify({ message: 'Photo uploaded successfully' }),
    // };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong' }),
    };
  }
};