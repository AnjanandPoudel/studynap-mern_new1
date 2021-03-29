var express = require('express');
var router = express.Router();

let Users=require('../models/usermodel');
let passport =require('passport');
let authenticate=require('../authenticate')


/* GET users listing. */
router.get('/',authenticate.verifyUser, function(req, res, next) {
  if(!authenticate.verifyAdminBoolean){
    Users.find({})
    .then(user=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(user)
    })
  }
  else{
    let err=new Error('I guess u are not authorized enough to pull out this request. Only Admins can do this. '+'(username: '+req.user.username+')')
    err.status=403;
    return next(err)
  }
 
});

router.post('/signup',(req,res,next)=>{
  //take username and password as para and register a new user then return the user 
  //(password hashing , username unique all conditions are checked automatically)
  Users.register(new Users({username:req.body.username}),req.body.password,(err,user)=>{
    if(err){
      res.statusCode=500;
      res.setHeader('Content-Type','application/json');
      res.json({err:err})
    }
    else{
      if(req.body.firstName){
        user.firstName=req.body.firstName
      }
      if(req.body.lastName){
        user.lastName=req.body.lastName
      }
      user.save((err,user)=>{
        if(err){
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
          passport.authenticate('local')(req,res,()=>{
          res.statusCode=200;
          res.setHeader('Content-Type','application/json');
          res.json({status:'Registration successful ',success:true,user:user})
        })
      })
     
    }
  })
})


router.post('/login',passport.authenticate('local'),(req,res)=>{
  // passport.authenticate('local') will automatically check the user's authentication 
  //passport.authenticate will put req.user 's value
  var token=authenticate.getToken({_id:req.user._id}) // if you choose you can also include other user's information
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.json({status:'Login successful ',success:true,token:token})
})

module.exports = router;
