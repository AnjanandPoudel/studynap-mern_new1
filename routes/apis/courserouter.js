const express=require('express');
const fs=require('fs');
const path=require('path');
const formidable=require('formidable');

let router=express.Router();
let courseModels=require('../../models/courseModel');
let cors=require('../cors');
let authenticate=require('../../authenticate');
let createdAt=new Date()

let uploadRouter=require('./uploadrouter')

/* let routerapp=express()
routerapp.use('/upload',uploadRouter); */


router.route('/')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors,(req,res,next)=>{
    courseModels.find({})
    .populate('author')
    .then(item=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(item)
    },err=>next(err))
    .catch(err=>next(err))
})
/* .post(cors.corsWithOptions,authenticate.verifyUser ,(req,res,next)=>{
  req.body.author=req.user._id;
  courseModels.create(req.body)
  .then((course)=>{
    courseModels.findById(course._id)
    .populate('author')
    .then(info=>{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(info);
    })
    .catch(err=>next(err))
  },err=>next(err))
  .catch(err=>next(err))
}) */

/*
.post(cors.cors,(req,res,next)=>{
    let form = new formidable.IncomingForm();
    console.log(req.body)
    form.parse(req,  (err, fields, files)=> {
      if(err){
        return res.status(400).json({
          error: "Image could not upload"
      })
      }
  
      else if(files.videoname){
        let oldpath=files.videoname.path;
        let videoname='__ap__'+createdAt+files.videoname.name
        videoname=videoname.replace(/ /g, '')
        let newpath='public/videos/'+videoname
    
        fs.rename(oldpath,newpath,err=>{  
          if (err){
            return err
          }
        })
    
        console.log(req.body)
        if(fields.videotitle){
          req.body.videotitle=fields.videotitle
        }
        if(fields.author){
          req.body.author=fields.author
        }
        if(fields.descp){
          req.body.descp=fields.descp
        }
        Course.create(req.body)          
        .then(courses=>{
          courses.videoname=videoname
  
          console.log("req.bodyyyyyyyyyyyyyyyyyyy",req.body)
          courses.save()
          .then(courses=>{
            res.redirect('/courses')
          })
          
        })
        .catch(e=>{
          console.log('uploadposterror')
        })
      }
      
      else{
        let err=new Error('Add files first , files add bhako xaina')
        err.status=401;
        return next(err)
      }
    
    });
}) */
.put(cors.corsWithOptions,authenticate.verifyUser  ,(req,res)=>{
    res.write('Not supported ... Try another request')
    res.end()
})
.delete(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin,(req,res,next)=>{
    courseModels.deleteMany({})
    .then(item=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(item)
    })
    .catch(err=>next(err))
})


router.route('/:id')
.get(cors.corsWithOptions,(req,res,next)=>{
    courseModels.findById(req.params.id)
    .populate('author')
    .then(item=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(item)
    })
    .catch(err=>next(err))
})
.put(cors.corsWithOptions,authenticate.verifyUser  ,(req,res,next)=>{
    courseModels.findById(req.params.id)
    .then(course=>{
      console.log(req.user._id)
      if(req.user._id.equals(course.author)){
        courseModels.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
          .populate('author')
          .then(item=>{
              res.statusCode=200;
              res.setHeader('Content-Type','application/json')
              res.json(item)
          })
          .catch(err=>next(err))
      }
      else{
        /* let err=new Error('Hello babe you are not the right user '+req.user.author)
        err.status=401;
        next(err) */

        res.statusCode=401;
        res.setHeader('Content-Type','application/json')
        res.json({err:"Hello babe you are not the right user , "+req.user.username})
        
      }
    })
      .catch(err=>next(err))
    
})
.post(cors.corsWithOptions,authenticate.verifyUser  ,(req,res)=>{
  res.write('Not supported ... Try another request')
  res.end()
})
.delete(cors.corsWithOptions,authenticate.verifyUser ,  (req,res,next)=>{
  console.log('hiiiiiiiiiii')


  courseModels.findById(req.params.id)
  .then(course=>{
    if(course.author.equals(req.user._id)){
      courseModels.findByIdAndDelete(req.params.id)
      .then(item=>{
          res.statusCode=200;
          res.setHeader('Content-Type','application/json')
          res.json(item)
      })
      .catch(err=>next(err))
    }
    else if(authenticate.verifyAdminBoolean(req.user)){
      courseModels.findByIdAndDelete(req.params.id)
      .then(item=>{
          res.statusCode=200;
          res.setHeader('Content-Type','application/json')
          res.json({item:item,warning:"This is not done by the course's owner, but it is done by "+ req.user.username + " whose admin status is ("+req.user.admin +") ", })
      })
      .catch(err=>next(err))
    }
    else{
      res.statusCode=401;
      res.setHeader('Content-Type','application/json')
      res.json({err:"Hello babe you are not the right user , "+req.user.username})
      
    }
  })
  .catch(err=>next(err))
    
})

module.exports=router