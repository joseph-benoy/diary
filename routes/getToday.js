let router = require('express').Router();
const bcrypt = require('bcrypt');
const {getToday} = require('../db');
const { validateToken} = require('../jwt');
const {decode} = require('../encryption');


router.get("/",validateToken,async (req,res)=>{
    try{
        let result = await getToday(req.username);
        res.json(result);
    }
    catch(err){
        res.status(400).json(err);
    }
});


module.exports = router;