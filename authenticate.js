let passport=require('passport');
let passLocalStrategy=require('passport-local').Strategy
let User=require('./models/usermodel');

let JwtStrategy=require('passport-jwt').Strategy;
let JwtExtract=require('passport-jwt').ExtractJwt;
let FacebookTokenStrategy=require('passport-facebook-token');
let jwt=require('jsonwebtoken');
let config=require('./config/keys')







exports.local=passport.use(new passLocalStrategy(User.authenticate()));
// up here u can also write the user authentication here 

//to track take the user information; 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// token is send using secretkey which expires in 3000 ms
exports.getToken=(user)=>{
    return(jwt.sign(user,config.secret_key,{expiresIn:3000}));
}

const optionsforJWTstrategy={}
optionsforJWTstrategy.jwtFromRequest=JwtExtract.fromAuthHeaderAsBearerToken(); //jwtFromRequest
optionsforJWTstrategy.secretOrKey=config.secret_key; //secretOrKey


//done is a callback provided by passport...
exports.JwtpassportNewStrategy=passport.use(new JwtStrategy(optionsforJWTstrategy,(jwt_payload_is_here,done)=>{
    console.log("jwt payload is === ", jwt_payload_is_here);
    User.findOne({_id:jwt_payload_is_here._id},(err,user)=>{
        if(err){
            return done(err,null)
        }
        else if(user){
            return done(null,user)
        }
        else{
            return done(null, null)
        }
    })
}))

// verify the incoming user
exports.verifyUser=passport.authenticate('jwt',{session:false}) // automatically does
// the token will be in the header then it will be extracted and verified
// i will import this verifyUser in all the request (post,put and delete)


exports.verifyAdmin=(req,res,next)=>{
   console.log(req.user)
   if(req.user.admin){
       next();
   }
   else{
        let err=new Error('Unauthorized i guess '+req.user.username);
        err.status=403;
        next(err);

   }
}

exports.verifyAdminBoolean=(user)=>{
    console.log(user)
    if(user.admin){
        return true
    }
    else{
        return false
 
    }
 }
 

 exports.facebookPassport=passport.use(new FacebookTokenStrategy({
     clientID:config.facebook.clientId,
     clientSecret:config.facebook.clientSecret
 },(accessToken,refreshToken,profile,done)=>{
    User.findOne({facebookId:profile.id},(err,user)=>{
        if(err){
            return done(err,false)
        }
        else if(user){
            return done(null,user)
        }
        else{
            user=new User({username:profile.displayName})
            user.facebookId=profile.id //this is for the search to come true
            user.firstName=profile.name.givenName;
            user.lastName=profile.name.familyName;
            user.save((err,user)=>{
                if(err){
                    return done(err,false)
                }
                else if(user){
                    return done(null,user)
                }
            })
        }
    })
 }
 
 ))