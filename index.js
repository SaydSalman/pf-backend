// loads .env file contents into Process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const pfServer = express()
const router = require('./Routes/route')

require('./DB/connection')
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 ||  process.env.PORT
pfServer.listen(PORT,()=>{
    console.log(`Project fair sever started at port: ${PORT}` );
})

pfServer.get('/',(req,res)=>{
    res.status(200).send("Project Fair Server Started!!! Waiting for Request")
})