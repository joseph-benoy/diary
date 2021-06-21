let router = require('express').Router();
const bcrypt = require('bcrypt');
const {getToday} = require('../db');
const { validateToken} = require('../jwt');

router.get("/",validateToken,async (req,res)=>{
    try{
        let result = await getToday();
        res.json(result);
    }
    catch(err){
        res.status(400).json({error:"cannot fetch today's entry"});
    }
});