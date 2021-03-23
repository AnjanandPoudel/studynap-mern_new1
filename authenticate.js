let passport=require('passport');
let passLocalStrategy=require('passport-local').Strategy
let User=require('./models/usermodel');


exports.local=passport.use(new passLocalStrategy(User.authenticate()));
// up here u can also write the user authentication here 

//to track take the user information; 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());