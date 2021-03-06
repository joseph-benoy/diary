let router = require('express').Router();
const bcrypt = require('bcrypt');
const {saveEntry} = require('../db');
const { validateToken} = require('../jwt');
const {encode} = require('../encryption');

router.post("/",validateToken,async (req,res)=>{
    if(req.body.title===""){
        res.status(400).json({error:"Title field empty"});
    }
    else if(req.body.data===""){
        res.status(400).json({error:"Data field empty"});
    }
    else if(req.body.date===""){
        res.status(400).json({error:"Date field empty"});
    }
    else{
        try{
            let data = {
                title:req.body.title,
                data:req.body.data,
                date:req.body.date
            };
            let result = await saveEntry(req.username,data);
            if(result.result.ok===1){
                res.json({message:"Saved entry"});
            }
            else{
                res.json({error:"Failed to save"});
            }
        }
        catch(err){
            res.json({error:"Failed to save"});
        }

    }
});


module.exports = router;