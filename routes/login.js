let router = require('express').Router();
const bcrypt = require('bcrypt');
const {getUserCred} = require('../db');

router.post('/',(req,res)=>{
    const {username,password} = req.body;
    if(username===""||password===""){
        res.status(400).json({error:"Empty fields"});
    }
    
});