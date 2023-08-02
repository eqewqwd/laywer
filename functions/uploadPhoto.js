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
      const base64String = event.body;
      const binaryData = Buffer.from(base64String, "base64");

      const result = await collection.insertOne({ image: binaryData });
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Photo uploaded successfully" }),
      };
    }

    if (event.httpMethod === "GET") {
      const photos = await collection.find().toArray();
      const photoList = photos.map((photo) => {
        return {
          image:`data:${photo.typeImg};base64,${photo.image.toString("base64")}`,
        };
      });
      return {
        statusCode: 200,
        body: JSON.stringify(photoList),
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "An error occurred" }),
    };
  } finally {
    await client.close();
  }
};
