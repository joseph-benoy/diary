let router = require('express').Router();
const bcrypt = require('bcrypt');
const {getUserCred} = require('../db');
const { createToken } = require('../jwt');

router.post('/',async(req,res)=>{
    const {username,password} = req.body;
    if(username===""||password===""){
        res.status(400).json({error:"Empty fields"});
    }
    else{
        let result = await getUserCred(username);
        if(result===null){
            res.status(400).json({error:"user not found"});
        }
        else{
            let match = await bcrypt.compare(password,result.cred.password);
            if(match){
                const accessToken = createToken({id:result._id,username:username});
                res.cookie('access-token',accessToken,{
                    maxAge:new Date(253402300000000),
                    httpOnly:true
                });
                res.json({message:"login OK"});
            }
            else{
                res.status(400).json({error:"wrong password"});
            }
        }
    }
});


module.exports = router;