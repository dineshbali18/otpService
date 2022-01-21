const mongoose=require("mongoose");
const otpSchema=new mongoose.Schema({
    otp:{
        type:String
    },
    email:{
        type:String,
        required:true
    }
},{timestamps:true})

// otpSchema.ensureIndex({ createdAt: 1 }, { expireAfterSeconds: 300 })

module.exports=mongoose.model("otp",otpSchema);
