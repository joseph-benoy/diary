//modules
const express = require('express')
const cookieParser = require('cookie-parser');
const fs = require('fs');



//routes
let registerRouter = require('./register');
let loginRouter = require('./login.js');
const { validateToken } = require('../jwt');
let addEntryImg = require('./addEntryImg');




//express configuration
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/registerac',registerRouter);
app.use('/login',loginRouter);
app.use('/addEntryImg',addEntryImg);






app.get('/dashboard',validateToken,(req,res)=>{
    res.send("<h1>Dashboard</h1>");
});



app.get("/",(req,res)=>{
    res.send({message:"Diary Base endpoint"});
});

app.get('/uploads/:filename',validateToken,(req,res)=>{
    app.use("/uploads/:filename",express.static(`./../uploads/${req.username}`));
    const filename = req.params.filename;
    if(fs.existsSync(`./uploads/${req.username}/${filename}`)){
        res.sendFile(filename,{root:`./uploads/${req.username}`});
    }
    else{
        res.status(400).json({error:"file not found"});
    }
});























app.all("*",(req,res)=>{
    res.status(400).json({
        error:"Invalid request"
    });
});
app.listen(3001);