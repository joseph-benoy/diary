let router = require('express').Router();
const { validateToken} = require('../jwt');
const {getUserCred}  =require('../db');

router.get('/',validateToken,async (req,res)=>{
    try{
        let result = await getUserCred(req.body.username);
        res.json(result);
    }
    catch(err){
        res.status(400).json({error:err});
    }
});

module.exports = router;