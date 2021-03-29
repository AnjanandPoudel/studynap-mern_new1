const mongoose=require('mongoose');

let passLM=require('passport-local-mongoose')

let User=new mongoose.Schema({
    firstName:{
        type:String,
        default:"firstname"
    },
    lastName:{
        type:String,
        default:"lastname"
    },
    admin:{
        type:Boolean,
        default:false
    }
})

//automatically add username and passwd
//(password hashing , username unique all conditions are checked automatically)
User.plugin(passLM);


let model=mongoose.model('User',User)
module.exports=model