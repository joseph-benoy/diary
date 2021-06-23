let router = require('express').Router();
const { validateToken} = require('../jwt');
const {getUserCred}  =require('../db');

router.get('/',validateToken,(req,res)=>{
    
});