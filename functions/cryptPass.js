// netlify/functions/hashPassword.js
const bcrypt = require('bcrypt');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { password } = JSON.parse(event.body);

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return {
      statusCode: 200,
      body: JSON.stringify({ hashedPassword }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to hash the password.' }) };
  }
};
