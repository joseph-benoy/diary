let router = require('express').Router();
const { validateToken} = require('../jwt');
const {updateEntry}  =require('../db');

router.post("/",validateToken,async (req,res)=>{
    try{
        const data = {
            title:req.body.title,
            data:req.body.data,
            date:req.body.date
        };
        let result = await updateEntry(req.username,data);
        res.send(result);
    }
    catch(err){
        res.status(400).json(err);
    }
});


module.exports = router;