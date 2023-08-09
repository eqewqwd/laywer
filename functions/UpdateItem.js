// netlify-functions/updateItem.js

const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

exports.handler = async (event) => {
  try {
    const { id, updatedData } = JSON.parse(event.body);
    var newId = new ObjectId(id)

    const uri = "mongodb+srv://sharonTamari:Yk32XkMYMJT4xVvN@cluster0.2uci30n.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db('lawyerWeb');
    const collection = db.collection('HomePage');

    // Update the item in MongoDB
    const result = await collection.updateOne({ _id: newId  }, { $set: updatedData });

    client.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Item updated successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while updating the item' }),
    };
  }
};
