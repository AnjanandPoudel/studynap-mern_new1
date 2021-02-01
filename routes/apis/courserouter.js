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


    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      if(err){
        next (err)
      }
  
      if(files.videoname){
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
          console.log(e)
        })
      }
      else{
        let err=new Error('Add files first')
        err.status=401;
        next(err)
      }
    
    });
      //to move the file in the desired location
  
  

/* 
    var form= new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        if(files.videoname){
            let oldpath=files.videoname.path;
            let newpath='/videos/'+'__'+createdAt+files.videoname.name;
    
            fs.rename(oldpath,newpath,(err)=>{
                if (err) throw err;
                res.write('files uploded and moved');
                res.end()
            })

            courseModels.create(req.body)
            .then(item=>{
                res.statusCode=200;
                res.setHeader('Content-Type','application/json')
                res.json(item)
            })
            .catch(err=>next(err))
        }
        else{
            res.write('post error in courserouter ')
            res.end()
        }
        
    }) */
})
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