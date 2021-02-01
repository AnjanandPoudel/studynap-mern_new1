const mongoose=require('mongoose');

let courseModel=new mongoose.Schema({
    videotitle:{
        type:String,
        default:'name'
    },
    descp:{
        type:String,
        default:'descp'
    },
    Rate:{
        type:Number,
        default:0
    },
    author:{
        type:String,
        default:"Author"
    }
})

let model=mongoose.model('courseModel',courseModel)
module.exports=model