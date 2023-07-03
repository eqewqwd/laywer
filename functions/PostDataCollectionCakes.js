const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:davidbenzohar3@sweetcake.gadahcn.mongodb.net/?retryWrites=true&w=majority";


exports.handler = async function(event, context) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const db = client.db("CakesDB");
  const collection = db.collection("CakesList");

  const data = JSON.parse(event.body);

  try {
    const result = await collection.insertOne(data);
    console.log('Data saved to MongoDB:', result);
    return {
      statusCode: 200,
      body: 'Form submitted successfully'
    };
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    return {
      statusCode: 500,
      body: 'Error submitting form'
    };
  } finally {
    await client.close();
  }
};
