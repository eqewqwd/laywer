// netlify-functions/updateItem.js

const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

exports.handler = async (event) => {
  try {
    const { id, updatedData } = JSON.parse(event.body);

    const uri = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Connect to MongoDB
    await client.connect();
    const collection = client.db("lawyerWeb").collection("HomePage");

    // Update the item in MongoDB
    const userData = await collection.findOne({ _id: ObjectId(id) });

    client.close();

    return {
      statusCode: 200,
      body: JSON.stringify( userData ),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while updating the item' }),
    };
  }
};
