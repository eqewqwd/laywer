// netlify-functions/login.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// MongoDB connection setup\
const uri = process.env.Mongo_Env + "administrator?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the user schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { username, password } = JSON.parse(event.body);

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ username });
    if (!user) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid credentials not found' + username + ',' + password }),
      };
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid credentials' + username + ',' + password  }),
      };
    }

    // If the credentials are valid, generate a JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h', // Token expiration time
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ token }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error ' + username + ',' + password }),
    };
  }
};
