// netlify-functions/updateItem.js

const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

exports.handler = async (event) => {
  try {
    const { id, updatedData } = JSON.parse(event.body);
    var newId = ObjectId(id)

     return {
            statusCode: 200,
            body: JSON.stringify(newId)
        };

    const uri = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority";
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
