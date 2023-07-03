// netlify/functions/update-item.js
const { MongoClient, ObjectID } = require('mongodb');

exports.handler = async (event) => {
  const { id, name } = JSON.parse(event.body);

  try {
    // Connect to MongoDB Atlas
    const uri = "mongodb+srv://admin:davidbenzohar3@sweetcake.gadahcn.mongodb.net/?retryWrites=true&w=majority";
        
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();

    // Update item in MongoDB Atlas
    const collection = client.db('CakesDB').collection('CakesList');
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectID(id) },
      { $set: { name: name } },
      { returnOriginal: false }
    );

    // Return the updated item
    return {
      statusCode: 200,
      body: JSON.stringify(result.value),
    };
  } catch (error) {
    console.error('Error updating item:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to update item' }),
    };
  } finally {
    // Close MongoDB connection
    client.close();
  }
};
