// functions/uploadPhoto.js
const { MongoClient } = require('mongodb');

exports.handler = async function(event, context) {

    const uri = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const db = client.db('lawyerWeb');
    const collection = db.collection('images');
    try {
    if (event.httpMethod === 'POST') {
      const { name, image } = JSON.parse(event.body);

      // Save photo details to the database
      await collection.insertOne({
        name: name,
        image: image // You can store the image URL or file path here
      });

      return {
        statusCode: 201,
        body: JSON.stringify({ message: 'Photo uploaded successfully' })
      };
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method not allowed' })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error uploading photo' })
    };
  } finally {
    await client.close();
  }
};
