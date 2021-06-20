let router = require('express').Router();
const bcrypt = require('bcrypt');
const {saveEntry} = require('../db');
const { validateToken} = require('../jwt');

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
            let titleEncoded = await bcrypt.hash(req.body.title,10);
            let dataEncoded = await bcrypt.hash(req.body.data,10);
            let data = {
                title:titleEncoded,
                data:dataEncoded,
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