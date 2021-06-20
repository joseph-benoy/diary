let mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const createUser = async (user)=>{
    const client = await mongoClient.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true});
    if(!client){
        return;
    }
    try{
        const db = client.db('diary');
        let userDoc = {
            cred:user,
            settings:{},
            entries:{}
        };
        let result = await db.collection('users').insertOne(userDoc);
        return result;
    }
    catch(err){
        console.log(err);
    }
    finally{
        client.close();
    }
}
const getUserCred = async (username)=>{
    const client = await mongoClient.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true});
    if(!client){
        return;
    }
    try{
        const db = client.db('diary');
        let result = await db.collection('users').findOne({"cred.username":username},{projection:{settings:0,entries:0}});
        return result;
    }
    catch(err){
        console.log(err);
    }
    finally{
        client.close();
    }
}

const saveEntry = async (username,data)=>{
    const client = await mongoClient.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true});
    if(!client){
        return;
    }
    try{
        const db = client.db('diary');
        let result = await db.collection('users').updateOne({"cred.username":username},
            {$push:{
                "entries":data
            }}
        );
        return result;
    }
    catch(err){
        return err;
    }
    finally{
        client.close();
    }
}



module.exports = {createUser,getUserCred,saveEntry};