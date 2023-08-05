const express = require("express");
const mongoose = require("mongoose"); 
const pinRoutes = require("./routes/pin");
const app = express();
const Port = process.env.PORT || 6001;

app.use(express.json());
require("dotenv").config();

//routes
app.use("/api/v1",pinRoutes);


mongoose
    .connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        app.listen(Port,()=> console.log("Server Started " ,Port));
    })

