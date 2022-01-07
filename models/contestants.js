const mongoose=require("mongoose");
const contestantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    votes:{
        type:Number,
        default:0
    },
    photo: {
        data: Buffer,
        contentType: String,
        // required:true
    },
    nominated:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model("contestants",contestantSchema);