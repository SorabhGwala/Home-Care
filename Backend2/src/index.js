
const express = require('express');

const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    return res.status(200).send({message:"Welcome to Ecommerce API - node",status:true}); 
})

const authRouters=require("./router/auth.router.js")
app.use("/auth",authRouters)

const userRouters=require("./router/user.router.js")
app.use("/users",userRouters)

module.exports=app;
