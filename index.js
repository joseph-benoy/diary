//modules
const express = require('express')
const cookieParser = require('cookie-parser');

//express configuration
var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

