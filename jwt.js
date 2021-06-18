const {sign,verify,decode} = require('jsonwebtoken');
const secret = "hello";


const createToken = (payload)=>{
    sign(payload,secret,(err,token)=>{
        if(err){
            return err;
        }
        return token;
    });
}











module.exports = {createToken};