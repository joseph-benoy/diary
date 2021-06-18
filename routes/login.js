let router = require('express').Router();
const bcrypt = require('bcrypt');
const {getUserCred} = require('../db');

router.post('/',async(req,res)=>{
    const {username,password} = req.body;
    if(username===""||password===""){
        res.status(400).json({error:"Empty fields"});
    }
    else{
        let result = await getUserCred(username);
        console.log(result);
        if(result===null){
            res.status(400).json({error:"user not found"});
        }
        else{
            let match = await bcrypt.compare(password,result.cred.password);
            if(match){
                res.json({message:"logged in successfully!"});
            }
            else{
                res.status(400).json({error:"wrong password"});
            }
        }
    }
});


module.exports = router;