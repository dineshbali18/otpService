const mongoose=require("mongoose");
const otpSchema=new mongoose.Schema({
    otp:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        index:{expires:300}
    }

},{timestamps:true})

module.exports=mongoose.model("otp",otpSchema);
