require('dotenv').config()

const express = require('express')

const cors =require('cors')
require('./db/connectiion')

const router=require('./Routes/router')


const server=express()

server.use(cors())
server.use(express.json())
server.use(router)

const PORT = 4000 || process.env.PORT


server.listen(PORT,()=>{
    console.log(`Hotel server started at port number ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send("Hotel  Server Started")
})

