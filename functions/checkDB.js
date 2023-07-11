// Import the MongoDB Node.js driver
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:davidbenzohar3@sweetcake.gadahcn.mongodb.net/?retryWrites=true&w=majority";


// Netlify function to check if data exists in MongoDB Atlas
exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

  // Connect to your Atlas cluster
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });

  // Select the database and collection you want to use
  const db = client.db('CakesDB');
  const collection = db.collection('CartList');

  // Check if the data already exists in the collection
  const existingData = await collection.findOne({ name: data.name });

  if (existingData) {
    // If the data already exists, modify its value
    let value = 2
    const updatedData = { $set: { productQuantity: data.value } };
    await collection.updateOne({ productQuantity: data.productQuantity }, updatedData);
  } else {
    // If the data does not exist, insert it into the collection
    await collection.insertOne(data);
  }

  // Close the connection to the Atlas cluster
  client.close();

  // Return a success message
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Data saved successfully' })
  };
}
