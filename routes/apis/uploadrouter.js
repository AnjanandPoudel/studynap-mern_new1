const express=require('express');
const multer=require('multer');

let authenticate=require('../../authenticate');
const cors  = require('../cors');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },

    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
})

//regular expression /.\('.....')$/
const imageFiltering=(req,file,cb)=>{
    if(!file.originalname.match(/\.('jpg|jpeg|png|gif')$/)){
        cb(new Error('Please choose the image file only (.jpg/.jpeg/.png/.gif) extensions'),false)
    }
    cb(null,true)
}

let upload = multer({storage:storage,fileFilter:imageFiltering});



let uploadRouter=express.Router();

uploadRouter.route('/')
.options(cors.corsWithOptions,(req,res,next)=>res.sendStatus(200))
.post(cors.corsWithOptions,authenticate.verifyUser,authenticate.verifyAdmin,upload.single('image_file'),(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(req.file)
})
.all(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    res.statusCode=403;
    res.setHeader('Content-Type','application/json');
    res.json({err:"Not available mate"})
})







module.exports=uploadRouter;