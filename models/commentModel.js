const mongoose=require('mongoose');



let Comments=new mongoose.Schema({
    comment:{
        type:String,
        default:"This is where u post comment"
    },
    date:{
        type:String,
        default:new Date().toISOString()
    },
    author:{
        type:String,
        default:'objecttype'
    },
    rate:{
        type:String,
        default:4
    },
    courseId:{
        type:String,
        default:'605442a0b6f36a39a455f73f'
    }

},{timestamps:true})

let commentModel= mongoose.model('Comments',Comments);

module.exports=commentModel;

