const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sharontamari8:HLOVOpNFKUPnF0F4@cluster0.sgz3zs4.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async (event, context) => {
    try {
        await client.connect();
        const collection = client.db("lawyerWeb").collection("HomePage");
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
