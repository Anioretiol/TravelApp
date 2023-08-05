const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const pinRoute = require("./routes/pin");
const Port = process.env.PORT || 6001;
dotenv.config();

app.use(express.json());



app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);


mongoose
    .connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        app.listen(Port,()=> console.log("Server Started " ,Port));
    })
