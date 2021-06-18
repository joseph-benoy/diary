let mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const createUser = async (user)=>{
    const client = await mongoClient.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true});
    if(!client){
        return;
    }
    try{
        const db = client.db('diary');
        let result = await db.collection('users').insertOne(user);
        return result;
    }
    catch(err){
        //console.log(err);
    }
    finally{
        client.close();
    }
}


module.exports = {createUser};