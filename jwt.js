const {sign,verify,decode} = require('jsonwebtoken');
const secret = "hello";


const createToken = (payload)=>{
    return sign(payload,secret);
}

const validateToken = (req,res,next)=>{
    const accessToken =  req.cookies['access-token'];
    if(!accessToken){
        return res.status(400).json({error:"user not authenticated"});
    }
    else{
        try{
            const payload = verify(accessToken,secret);
            if(payload){
                req.authenticated = true;
                req.username = payload.username;
                req.id = payload.id;
                return next();
            }
        }
        catch(err){
            res.status(400).json({error:err});
        }
    }
}










module.exports = {createToken,validateToken};