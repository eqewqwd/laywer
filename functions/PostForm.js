const { MongoClient } = require('mongodb');
const uri = process.env.Mongo_Env + "?retryWrites=true&w=majority";


exports.handler = async function(event, context) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  const db = client.db("lawyerWeb");
  const collection = db.collection("Forms");

  
  const {FormImg,name,title,subTitle,info,postDate} = JSON.parse(event.body);

  const data = {
    FormImg,
    name,
    title,
    subTitle,
    info,
    postDate
  }

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
