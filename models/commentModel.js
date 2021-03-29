
const mongoose=require('mongoose');
const Schema=mongoose.Schema;






const commentSchema=new Schema({
    rating:{
        type:Number ,
        min:1,
        max:5,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    comment:{
        type:String,
        default:'nothing',
        required:true
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'courseModel'
    }
},{timestamps:true}
)

let Comments=mongoose.model('Comment',commentSchema)

module.exports=Comments