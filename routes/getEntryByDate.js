let router = require('express').Router();
const bcrypt = require('bcrypt');
const {getEntryByDate} = require('../db');
const { validateToken} = require('../jwt');


router.post("/",validateToken,async (req,res)=>{
    try{
        let result = await getEntryByDate(req.username,req.body.date);
        if(!result.title){
            res.json({title:"",data:"",date:""});
        }
        res.json(result);
    }
    catch(err){
        res.status(400).json(err);
    }
});


module.exports = router;