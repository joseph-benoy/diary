//modules
const express = require('express')
const cookieParser = require('cookie-parser');

//routes

let registerRouter = require('./register');



//express configuration
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/register',registerRouter);

app.get("/",(req,res)=>{
    res.send("Hello world!");
});
























app.all("*",(req,res)=>{
    res.status(400).json({
        error:"Invalid request"
    });
});
app.listen(3001);