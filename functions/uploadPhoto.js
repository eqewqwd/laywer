// netlify-functions/uploadPhoto.js

const MongoClient = require("mongodb").MongoClient;

const mongoUri = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB Atlas URI
const dbName = "lawyerWeb"; // Replace with your database name
const collectionName = "images";

exports.handler = async function (event, context) {
  const client = await MongoClient.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    if (event.httpMethod === "POST") {
      const photo = JSON.parse(event.body);

      const result = await collection.insertOne(photo);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Photo uploaded successfully" }),
      };
    }

    if (event.httpMethod === "GET") {
      const photos = await collection.find().toArray();
      return {
        statusCode: 200,
        body: JSON.stringify(photos),
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "An error occurred" }),
    };
  } finally {
    client.close();
  }
};
