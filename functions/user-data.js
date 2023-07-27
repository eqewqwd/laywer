const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

// MongoDB Connection URL
const dbURL = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'administrator';
const collectionName = 'users';

const JWT_SECRET =  process.env.JWT_SECRET_KEY; // Replace this with your JWT secret key

exports.handler = async (event, context) => {
  if (!event.headers.authorization) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Authorization token not provided.' })
    };
  }

  const token = event.headers.authorization.split(' ')[1];

  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(token, JWT_SECRET);
    var idtest = decodedToken.userId
    return idtest

    // Connect to MongoDB
    const client = await MongoClient.connect(dbURL);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Fetch user data based on the decoded token (e.g., user ID or email)
    const userData = await collection.findOne({ _id: idtest});

    // Close the MongoDB connection
    await client.close();
        // return {
        //     statusCode: 200,
        //     body: JSON.stringify(decodedToken.userId)
        // };
    if (!userData) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User not found.' })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(userData)
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' })
    };
  }
};
