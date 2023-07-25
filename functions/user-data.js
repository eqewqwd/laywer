// netlify-functions/user/user.js

const mongoose = require('mongoose');
const verifyToken = require('verify');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Add any other user-related fields you need
});

const User = mongoose.model('User', userSchema);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Connect to MongoDB (replace YOUR_MONGODB_CONNECTION_STRING with your actual connection string)
  await mongoose.connect("mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/administrator?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    const token = event.headers.authorization;
    if (!token) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Unauthorized' }),
      };
    }

    // Implement the logic to get user data from the token
    // You will need to verify the token and then find the user based on its data.
    // For brevity, we'll assume you have a function to verify the token called `verifyToken`.

    try {
      // Verify the token and extract user data
      const userData = verifyToken(token);
      // Assuming you are using email as the identifier
      const user = await User.findOne({ email: userData.email });

      if (!user) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'User not found' }),
        };
      }

      // Return the user data
      return {
        statusCode: 200,
        body: JSON.stringify(user),
      };
    } catch (err) {
      console.error('Error getting user data:', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal server error' }),
      };
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
