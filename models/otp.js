const mongoose=require("mongoose");
const User=require("./user")
const otpSchema=new mongoose.Schema({
    otp:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        expires:'350',
        default:Date.now
    }

})

module.exports=mongoose.model("otp",otpSchema);
