const express = require("express");
const mongoose = require("mongoose"); 
const app = express();

const Port = process.env.PORT || 6001;


require("dotenv").config();

mongoose
    .connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        app.listen(Port,()=> console.log("Server Started " ,Port));
    })

