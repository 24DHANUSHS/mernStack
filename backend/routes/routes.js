// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
// var Book = require('../models/schema');

// router.post('/register', function(req, res, next) {
//     console.log(req.body);
// });
// module.exports = router;

const express = require("express")
const router = express.Router();

const userSchema = require("../models/schema");


router.use((req,res,next)=>{

})


router.get("/",(req,res)=>{
    res.json("From router");
})
// router.post('localhost:5000/register',(req,res)=>{
//     console.log("ajay ");
//       console.log(req.body);
//       res.send("Data recieved");
// })



module.exports = router;