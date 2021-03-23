var express = require('express');
var router = express.Router();

let User=require('../models/usermodel');
let passport =require('passport');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
  .then(user=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(user)
  })
});

router.post('/signup',(req,res,next)=>{
  //take username and password as para and register a new user then return the user 
  //(password hashing , username unique all conditions are checked automatically)
  User.register(new User({username:req.body.username}),req.body.password,(err,user)=>{
    if(err){
      res.statusCode=500;
      res.setHeader('Content-Type','application/json');
      res.json({err:err})
    }
    else{
      passport.authenticate('local')(req,res,()=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json({status:'Registration successful ',success:true,user:user})
      })
    }
  })
})


router.post('/login',passport.authenticate('local'),(req,res)=>{
  // passport.authenticate('local') will automatically check the user's authentication 
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.json({status:'Login successful ',success:true})
})

module.exports = router;
