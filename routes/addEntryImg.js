let express = require('express');
let router = require('express').Router();
const {validateToken} = require('../jwt');
var multer  = require('multer');
const path = require('path');
const fs = require('fs');

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        if(!fs.existsSync(`./uploads/${req.username}/`)){
            fs.mkdirSync(`./uploads/${req.username}`,{recursive:true});
        }
        cb(null,`./uploads/${req.username}`);
    },
    filename:(req,file,cb)=>{
        cb(null,`${file.originalname}`);
    }
});
var upload = multer({storage:storage});

router.post("/",validateToken,upload.single('img'),(req,res)=>{
    res.json({message:"Image uploaded",url:`uploads/${req.file.filename}`});
});


module.exports = router;