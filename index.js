require('dotenv').config()
const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")


const app=express();
app.use(bodyParser.json())
app.use(cors());

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((e)=>{
      console.log(e);
      console.log("DB NOT CONNECTED SUCCESFULLY");
  });

const otpRoutes=require("./routes/otp")
const contestantRoutes=require("./routes/contestants")


app.use("/api",contestantRoutes);
app.use("/api",otpRoutes);
app.listen(process.env.PORT,()=>{
    console.log(`app is running at ${5000}`)
})