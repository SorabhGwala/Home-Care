// const express = require("express")
import express from "express"
// const cors = require("cors")
import cors from "cors"
import authRouters from "./router/auth.router.js"
const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
     return res.status(200).send({message:"welcome to my home care ",status:true})
})
// const authRouters=require("./router/auth.router.js")
app.use("/auth",authRouters)


// const userRouters=require("./router/user.router.js")
// app.use("/users",userRouters)



export default app;
