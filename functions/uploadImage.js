// uploadImage.js
const mongodb = require('mongodb');
const multer = require('multer');

const MongoClient = mongodb.MongoClient;
const mongoURL = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'lawyerWeb';
const collectionName = 'images';

const upload = multer({ dest: 'uploads/' });

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const client = await MongoClient.connect(mongoURL);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const file = event.body;

    // Save the image URL in MongoDB Atlas
    const result = await collection.insertOne({ imageUrl: file });

    client.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Image uploaded successfully' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
