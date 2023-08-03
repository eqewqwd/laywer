const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://aviadbenzohar5:ZNpcQIHRxUfTORmx@cluster0.frsyu1a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async (event, context) => {
    try {
        await client.connect();
        const collection = client.db("lawyerWeb").collection("Forms");
        const result = await collection.find().toArray();
        const test = result.map((data) => {
            return {
                binaryData:data.binaryData,
                typeProp:data.typeProp,
                name:data.name,
                title:data.title,
                subTitle:data.subTitle,
                info:data.info,
                postDate:data.postDate
            };
          });
        return {
            statusCode: 200,
            body: JSON.stringify(test)
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
