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
const getToday = async(username)=>{
    const client = await mongoClient.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true});
    if(!client){
        return;
    }
    try{
        const db = client.db('diary');
        let date = new Date().toLocaleDateString("en-GB", { // you can use undefined as first argument
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
        let result = await db.collection('users').findOne({"cred.username":username,"entries.date":date},{projection:{_id:0,"entries.$":1}});
        return result.entries[0];
    }
    catch(err){
        return {};
    }
    finally{
        client.close();
    }
}
const updateEntry = async (username,data)=>{
    const client = await mongoClient.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true});
    if(!client){
        return;
    }
    try{
        const db = client.db('diary');
        let date = new Date().toLocaleDateString("en-GB", { // you can use undefined as first argument
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          const query = {
              $and:[{"cred.username":username},{"entries.date":date}]
          };
          const value = {
            $set:{
                "entries.$.title":data.title,
                "entries.$.data":data.data
            }
          };
        let entries = await db.collection('users').updateOne(query,value);
        return result;
    }
    catch(err){
        return err;
    }
    finally{
        client.close();
    }
}
const getEntryByDate = async (username,date)=>{
    const client = await mongoClient.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true});
    if(!client){
        return;
    }
    try{
        const db = client.db('diary');
        let result = await db.collection('users').findOne({"cred.username":username,"entries.date":date},{projection:{_id:0,"entries.$":1}});
        return result.entries[0];
    }
    catch(err){
        return {};
    }
    finally{
        client.close();
    }
}
module.exports = {createUser,getUserCred,saveEntry,getToday,updateEntry,getEntryByDate};