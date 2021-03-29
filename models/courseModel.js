const mongoose=require('mongoose');
/* videotitle:name,
email:email,
subject:subject,
description:descp,
image:selectedfile */

let CourseModel=new mongoose.Schema({
    videotitle:{
        type:String,
        default:'Anjan'
    },
    description:{
        type:String,
        default:'This section contains description '
    },
    Rate:{
        type:Number,
        default:3
    },
    Likes:{
        type:Number,
        default:78
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
        default:"images/p.png"
    }
})

let model=mongoose.model('courseModel',CourseModel)
module.exports=model