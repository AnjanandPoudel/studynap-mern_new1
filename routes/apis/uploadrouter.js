const express=require('express');
const multer=require('multer');
let authenticate=require('../../authenticate');
const cors  = require('../cors');
let CourseModel=require('../../models/courseModel')

let createAt=Date.now()
console.log(createAt)
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/videos')
    },

    filename:(req,file,callback)=>{
        callback(null,req.user._id+'___'+createAt +'___'+file.originalname)
    }
})
const storageimg=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/assets')
    },

    filename:(req,file,callback)=>{
        callback(null,req.user._id+'___'+createAt +'___'+file.originalname)
    }
})

//regular expression /.\('.....')$/
const videoFiltering=(req,file,cb)=>{
    if(!file.originalname.match(/\.(avi|mkv|gif|mp4|m4v)$/)){
        cb(new Error('Please choose the image file only ((avi|mkv|gif|mp4)) extensions'),false)
    }
    else{
        cb(null,true)
    }
}
const imageFiltering=(req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        cb(new Error('Please choose the image file only ((avi|mkv|gif|mp4)) extensions'),false)
    }
    else{
        cb(null,true)
    }
}

let upload = multer({storage:storage,fileFilter:videoFiltering});

let uploadImage= multer({storage:storageimg,fileFilter:imageFiltering});

let uploadRouter=express.Router();

uploadRouter.route('/')
.options(cors.corsWithOptions,(req,res,next)=>res.sendStatus(200))
.post(cors.corsWithOptions,authenticate.verifyUser,upload.single('selectedfile'),(req,res,next)=>{
    console.log(req.body)
    req.body.video='videos/'+req.file.filename
    req.body.author=req.user._id
    console.log(req.body)

    CourseModel.create(req.body)
    .then((course)=>{
      CourseModel.findById(course._id)
      .populate('author')
      .then(info=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(info);
      })
      .catch(err=>next(err))
    },err=>next(err))
    .catch(err=>next(err))
  
})
.all(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    res.statusCode=401;
    res.setHeader('Content-Type','application/json');
    res.json({err:"Not available mate"})
})



uploadRouter.route('/:imageid')
.options(cors.corsWithOptions,(req,res,next)=>res.sendStatus(200))
.put(cors.corsWithOptions,authenticate.verifyUser,uploadImage.single('selectedfile'),(req,res,next)=>{
    console.log(req.body)
    req.body.image='assets/'+req.file.filename
    console.log(req.body)
    console.log(req.params.imageid)

    CourseModel.findById(req.params.imageid)
    .then(course=>{
        if(req.user._id.equals(course.author)){
            CourseModel.findByIdAndUpdate(req.params.imageid,{$set:req.body},{new:true})
          .then(info=>{
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json(info);
          },err=>next(err))
          .catch(err=>next(err))
        }
        else{
            res.status(401).send('You may be the wrong user for this action, user authentication failed');

        }
    })
    .catch(err=>{
        res.status(401).send("erro");

    })
})
.all(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    res.statusCode=401;
    res.setHeader('Content-Type','application/json');
    res.json({err:"Not available mate"})
})





/* 
console.log(req.body)
const videotitle=req.body.name;
const description=req.body.description;
const Rate=req.body.rate;
const Likes=req.body.likes;
const author=req.user._id;
const email=req.body.email;
const image=req.file.filename;

const newUserData={
    videotitle,description,Rate,Likes,author,email,image
}

const newUser=new CourseModel (newUserData);
newUser.save()
.then(()=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({file:req.file,message:"user data added"});
})
.catch(err=>next(err))
 */





module.exports=uploadRouter;




