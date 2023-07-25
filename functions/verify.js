const jwt = require('jsonwebtoken');

// Replace 'your-secret-key' with a strong secret key used for signing the token
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
      if (err) {
        reject(err);
      } else {
        resolve(decodedToken);
      }
    });
  });
};

module.exports = verifyToken;
