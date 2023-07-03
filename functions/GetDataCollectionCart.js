const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:davidbenzohar3@sweetcake.gadahcn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async (event, context) => {
    try {
        await client.connect();
        const collection = client.db("CakesDB").collection("CartList");
        const result = await collection.find().toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({msg: err.message})
        };
    } finally {
        await client.close();
    }
}
