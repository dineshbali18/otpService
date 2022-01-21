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
        expires:'5m',
        default:Date.now
    }

})

module.exports=mongoose.model("otp",otpSchema);
