// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://127.0.0.1:27017/mernTour', {  promiseLibrary: require('bluebird') })
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

// var book = require('./routes/routes');
// var app = express();

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({'extended':'false'}));
// app.use(express.static(path.join(__dirname, 'build')));

// // app.use('/api/book', book);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send('error');
// });

// module.exports = app;

































































// // // var MongoClient = require('mongodb').MongoClient;
// // // var database = undefined;
// // // var dbUrl = 'mongodb://127.0.0.1:27017/mernTour';
// // // MongoClient.connect(dbUrl, function(err, db) {
// // //   if (err) {
// // //     throw err;
// // //   } else {
// // //     database = db;
// // //     console.log('MongoDB connection successful');
// // // }
// // // });


// // // var express=require("express");
// // // var bodyParser=require("body-parser");
  
// // // const mongoose = require('mongoose');
// // // mongoose.connect('mongodb://localhost:27017/gfg');
// // // var db=mongoose.connection;
// // // db.on('error', console.log.bind(console, "connection error"));
// // // db.once('open', function(callback){
// // //     console.log("connection succeeded");
// // // })

// // // var app=express()
  
  
// // // app.use(bodyParser.json());
// // // app.use(express.static('public'));
// // // app.use(bodyParser.urlencoded({
// // //     extended: true
// // // }));


// // var express = require('express');
// // var router = express.Router();
// // var mongoose = require('mongoose');
// // var Book = require('./models/schema');

// // router.post('/register', function(req,res){
// //   console.log(123);
// //   var name = req.body.name;
// //   var email =req.body.email;
// //   var pass = req.body.password;
// //   var phone =req.body.phone;

// //   // var data = {
// //   //     "name": name,
// //   //     "email":email,
// //   //     "password":pass,
// //   //     "phone":phone
// //   // }
// // })
// // console.log("server listening at port 3000");
// // // const express = require("express");
// // // const app = express();
// // // const mongoose = require("mongoose");
// // // const UserModel = require("./models/schema");

// // // const cors = require("cors");

// // // app.use(express.json());
// // // app.use(cors());

// // // mongoose.connect(
// // //   "mongodb://127.0.0.1:27017/mernTour"
// // // );

// // // app.get("/register", (req, res) => {
// // //   console.log(req.body);
// // //   UserModel.find({}, (err, result) => {

// // //     if (err) {
// // //       res.json(err);
// // //     } else {
// // //       res.json(result);
// // //     }
// // //   });
// // // });

// // // app.post("/register", async (req, res) => {
// // //   const user = req.body;
// // //   // const newUser = new UserModel(user);
// // //   // await newUser.save();

// // //   res.json(user);
// // // });





const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

const registerUserRouter = require("./routes/routes");
const userSchema = require("./models/schema");
const adminSchema = require("./models/adminSchema");

app.use(morgan("dev"));






app.use(express.json());

// app.use('/',registerUserRouter);

app.post("/login",(req,res)=>{


  var name=req.body.email;
  var password=req.body.password;
  var check=0;
  console.log(password);
  adminSchema.find({}, function(e, admin){
    if (e)
        return done(e);

    if (admin) {
      console.log("from admin")
      console.log("Users count : " + adminSchema.length)
      // console.log(Users[0].password);
      admin.forEach(j => {
        if (j.name==name  && (j.password)==password)
        {
          console.log("correct");
        check=2;
        
        }
        
      })
      
    }
    // console.log(check);
    // res.json(check);
  })


  userSchema.find({}, function(err, Users){
    if (err)
        return done(err);
    console.log(Users);
    if (Users) {
      console.log("Users count : " + userSchema.length)
      // console.log(Users[0].password);
      Users.forEach(i => {
        if (i.email==name  && (i.password)==password)
        {
          check=1;
          
        }
      })
      
    }
    console.log(check);
   res.json(check);
  })
  

  // const projection = {  email: 0, password: 1 };
  // const cursor = userSchema.find().project(projection);
  // console.log(cursor);
  

})




  


app.post("/register",(req,res)=>{
  // console.log("ajay ");
  // console.log(req.body);
  var data = new userSchema({
    name:req.body.name,
    password:req.body.pass,
    email:req.body.email,
    dob:req.body.dob,
    job:req.body.profession,
    phone:req.body.phone,
    address:req.body.address,
    state:req.body.state,
    // district:req.body.district,
  })
  data.save()
  .then(()=>res.json("Data Inserted"))
  .catch(error => res.json(1))
  // res.send("");
console.log("Ajay");
})

//getting values of users
app.get("/getAllUser",(req,res)=>{

  // var data = userSchema.findOne();
  // console.log();
  // res.send("working")
  userSchema.find()
  .then(users=>res.json(users))
  .catch(error => res.status(400).json('error : '+error))

})

app.post("/adminLogin",(req,res)=>{
  var data = new adminSchema({
    name:"admin@gmail.com",
    password:"Admin@123",
})
data.save();
res.json("Done");
})


app.listen(5000,()=>{
  console.log("Server started at port : 5000");
})

// Database connection
mongoose.connect("mongodb://localhost/user",(err)=>{
  if(!err){
    console.log("Database Connected successfully");
  }
})