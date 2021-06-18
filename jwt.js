const {sign,verify,decode} = require('jsonwebtoken');
const secret = "hello";


const createToken = (payload)=>{
    return sign(payload,secret);
}











module.exports = {createToken};