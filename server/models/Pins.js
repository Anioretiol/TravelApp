const mongoose = require("mongoose");
const PinSchema =new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    desc:{
        type:String,
        require:true,
        min:3,
    },
    rating:{
        type:Number,
        required,
        min:0,
        max:5,
    },
    lat:{
        type:Number,
        require:true,
    }
   },
{timestamps:true}
);

module.exports=mongoose.model("Pin",PinSchema);