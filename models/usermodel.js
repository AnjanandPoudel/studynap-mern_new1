const mongoose=require('mongoose');

let passLM=require('passport-local-mongoose')

let Usermodel=new mongoose.Schema({
    
    admin:{
        type:Boolean,
        default:false
    }
})

//automatically add username and passwd
//(password hashing , username unique all conditions are checked automatically)
Usermodel.plugin(passLM);


let model=mongoose.model('User',Usermodel)
module.exports=model