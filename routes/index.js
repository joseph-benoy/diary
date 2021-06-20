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

app.get('/dashboard/uploads/:filename',validateToken,(req,res)=>{
    app.use("/dashboard/uploads/:filename",express.static(`./../uploads/${req.id}`));
    const filename = req.params.filename;
    if(fs.existsSync(`./uploads/${req.id}/${filename}`)){
        res.sendFile(filename,{root:`./uploads/${req.id}`});
    }
    else{
        res.status(400).json({error:"file not found"});
    }
});
app.post('/saveentry',(req,res)=>{
    res.json(req.body);
});






















app.all("*",(req,res)=>{
    res.status(400).json({
        error:"Invalid request"
    });
});
app.listen(3001,()=>{
    console.clear();
    console.log("Server started");
});