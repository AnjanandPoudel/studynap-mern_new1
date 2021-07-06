const mongoose=require('mongoose');
/* videotitle:name,
email:email,
subject:subject,
description:descp, 
image:selectedfile */

let CourseModel=new mongoose.Schema({
    name:{
        type:String,
        default:'Videotitle'
    },
    description:{
        type:String,
        default:'This section contains description '
    },
    subject:{
        type:String,
        default:'This section contains subject '
    },
    Rate:{
        type:Number,
        default:0
    },
    Likes:{
        type:Number,
        default:0
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User' //name of model
    },
    email:{
        type:String,
        default:"Author@gmail.com"
    },
    image:{
        type:String,
        default:'assets/way.jpg'
    },
    video:{
        type:String,
        default:'videos/605d7d247ad6303ba489b79d___1618281537149___10025_20210121_125226.mp4'
    },
    grade:{
        type:String,
        default:'11'
    }
})

let model=mongoose.model('courseModel',CourseModel)
module.exports=model