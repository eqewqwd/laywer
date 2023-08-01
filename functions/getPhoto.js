// netlify-functions/getPhoto.js
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

exports.handler = async (event, context) => {
  try {
    const uri = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db('lawyerWeb');
    const collection = db.collection('images');

    // Get the photo based on the provided photo ID (in the query string)
    const photoId = event.queryStringParameters.id;
    const photo = await collection.findOne({ _id: ObjectId(photoId) });

    client.close();

    if (!photo) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Photo not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ photo: photo.image.toString('base64') }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong' }),
    };
  }
};