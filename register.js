let express = require('express');
let router = express.Router();
let {createUser} = require('./db');




router.post('/',async (req,res)=>{
    const {fullname,username,password} = req.body;
    if(fullname===""||username===""||password===""){
        res.status(400).json({error:"Invalid fields"});
    }
    else if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(username)){
        res.status(400).json({error:"Invalid email"});
    }
    else if(password.length<8){
        res.status(400).json({error:"password less than 8 chars"});
    }
    else{
        let result = await createUser({fullname:fullname,username:username,password:password});
        if(result.result.ok){
            res.json({message:"new user created"});
        }
        else{
            res.status(400).json({message:"something went wrong",error:result});
        }
    }
});

module.exports = router;