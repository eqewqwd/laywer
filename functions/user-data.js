const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const MONGODB_URI = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority"; // Replace this with your MongoDB connection string
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
    console.log(decodedToken)

    // // Connect to MongoDB
    // const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });
    // await client.connect();
    // const db = client.db("administrator");

    // // Fetch user data based on the decoded token (e.g., user ID or email)
    // const userData = await db.collection('users').findOne({ _id: decodedToken.userId });

    // // Close the MongoDB connection
    // await client.close();

    // if (!userData) {
    //   return {
    //     statusCode: 404,
    //     body: JSON.stringify({ error: 'User not found.' })
    //   };
    // }

    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(userData)
    // };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' })
    };
  }
};
