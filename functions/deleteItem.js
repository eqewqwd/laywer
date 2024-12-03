const { MongoClient, ObjectId } = require('mongodb');


exports.handler = async (event) => {
  try {

    const uri = process.env.Mongo_Env + "?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db('lawyerWeb');
    const collection = db.collection('videos');

    const itemId = event.queryStringParameters.id;
    
    const itemIdFix = new ObjectId(itemId)

    const result = await collection.deleteOne({ _id: itemIdFix });


    client.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Item removed successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while updating the item' }),
    };
  }
};
