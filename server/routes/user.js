const Users = require("../models/Users");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/register",async (req,res)=>{
        try {
            const salt= await bcrypt.genSalt(10);
            const hashpasword=await bcrypt.hash(req.body.password,salt);

            const newUser = new Users({
                username:req.body.username,
                email:req.body.email,
                password:hashpasword,
            });

            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
})