const express=require('express');
const Comments=require('../../models/commentModel')
const cors=require('../cors')
const router=express.Router()



router.route('/')
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors,(req,res,next)=>{
    Comments.find()
    .then(comment=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(comment)
    })
})
.post(cors.corsWithOptions,(req,res,next)=>{
    Comments.create(req.body)
    .then(comment=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(comment)
    })
})
.delete(cors.corsWithOptions,(req,res,next)=>{
    Comments.remove({})
    .then(comment=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(comment)
    })
})


module.exports=router;