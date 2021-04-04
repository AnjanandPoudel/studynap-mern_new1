const express=require('express');
const Comments=require('../../models/commentModel')
const cors=require('../cors')
let router=express.Router();
let authenticate=require('../../authenticate');



router.route('/')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors,(req,res,next)=>{
    Comments.find()
    .populate('author')
    .then(comment=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(comment)
    })
})
.post(cors.corsWithOptions,authenticate.verifyUser  ,(req,res,next)=>{
    if(req.user!==null){
        req.body.author=req.user._id
        console.log(req.body)
        Comments.create(req.body)
        .then(comment=>{
           Comments.findById(comment._id)
           .populate('author')
           .populate('course')
           .then(commentinfo=>{
                res.statusCode=200;
                res.setHeader('Content-Type','application/json');
                res.json(commentinfo)
           })
           .catch(err=>next(err))
        },err=>next(err))
        .catch(err=>next(err))
    }
    else{
        err=new Error("Comment cannot be posted ... forbidden;;")
        next(err)
    }
    
})
.put(cors.corsWithOptions,authenticate.verifyUser  ,(req,res,next)=>{
    res.statusCode=401;
    res.setHeader('Content-Type','application/json');
    res.json({err:"Forbidden"})
})
.delete(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin,(req,res,next)=>{
    Comments.collection.dropAllIndexes();
    Comments.deleteMany()
    .then(comment=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(comment)
    },err=>next(err))
    .catch(err=>next(err))
})

router.route('/:commentId')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200);})
.get(cors.cors,(req,res,next)=>{
    Comments.findById(req.params.commentId)
    .then(comment=>{
        if(comment!=null){
            Comments.findById(req.params.commentId)
                .populate('author')
                .then(comment=>{
                    res.statusCode=200;
                    res.setHeader('Content-Type','application/json');
                    res.json(comment)
                },err=>next(err))
                .catch(err=>next(err))
        }
        else{
            let error= new Error('Comment not found');
            error.status=403;
            next(error)
        }
    })
    .catch(err=>{
        let error= new Error('Comment not found    '+err);
        error.status=403;
        next(error)
    })
})
.post(cors.corsWithOptions, authenticate.verifyUser,(req,res,next)=>{
    res.statusCode=403;
    res.setHeader('Content-Type','application/json');
    res.json({err:"forbidden babe"})
})
.put(cors.corsWithOptions, authenticate.verifyUser,(req,res,next)=>{
    Comments.findById(req.params.commentId)
    .then(info=>{
        if(info!=null){
            console.log(info)
            console.log(req.user._id)
            if(!info.author.equals(req.user._id)){
                let err= new Error("You are unauthorized for this request"+ info);
                err.status=403;
                next(err);
            }
            req.body.author=req.user._id
            Comments.findByIdAndUpdate(req.params.commentId,{$set:req.body},{new:true})
            .populate('author')
            .then(comment=>{
                res.statusCode=200;
                res.setHeader('Content-Type','application/json');
                res.json(comment);
            })
            .catch(err=>next(err))
        }
        else{
            let error= new Error('Comment not found');
            error.status=403;
            next(error)
        }
    })
    .catch(err=>next(err))
}) // dropindex or something like that if u want to delete the mongoose model also ;; needed to remove required:true  properties..
.delete(cors.corsWithOptions,authenticate.verifyUser,(req,res,next)=>{
    Comments.findById(req.params.commentId)
    .then(comment=>{
        if(comment!=null){
            if(!comment.author.equals(req.user._id)){
                let error= new Error('Not authorized or forbidden to u ');
                error.status=403;
                next(error)
            }
            req.body.author=req.user._id;
            Comments.findByIdAndDelete(req.params.commentId)
            .then(comment=>{
                res.statusCode=200;
                res.setHeader('Content-Type','application/json');
                res.json(comment)
            })
            .catch(err=>next(err))
        }
        else{
            let error= new Error('Comment not found');
            error.status=403;
            next(error)
        }
    })
    .catch(err=>next(err))
})



module.exports=router;