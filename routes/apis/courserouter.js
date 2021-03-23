const express=require('express');
const fs=require('fs')
const path=require('path')
const formidable=require('formidable')
let router=express.Router()
let courseModels=require('../../models/courseModel')
let cors=require('../cors')

let createdAt=new Date()

router.route('/')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors,(req,res,next)=>{
    courseModels.find()
    .then(item=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(item)
    })
    .catch(err=>next(err))
})
.post(cors.corsWithOptions,(req,res,next)=>{
  courseModels.create(req.body)
  .then((info)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(info);
  },err=>next(err))
  .catch(err=>next(err))

})

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
.put((req,res)=>{
    res.write('Not supported ... Try another request')
    res.end()
})
.delete((req,res,next)=>{
    courseModels.remove({})
    .then(item=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(item)
    })
    .catch(err=>next(err))
})




  
  
  



router.route('/:id')
.get((req,res,next)=>{
    courseModels.findById(req.params.id)
    .then(item=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(item)
    })
    .catch(err=>next(err))
})
.put((req,res,next)=>{
    courseModels.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then(item=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(item)
    })
    .catch(err=>next(err))
})
.post((req,res)=>{
    res.write('Not supported ... Try another request')
    res.end()
})
.delete((req,res,next)=>{
    courseModels.findByIdAndDelete(req.params.id)
    .then(item=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(item)
    })
    .catch(err=>next(err))
})

module.exports=router