require("dotenv").config()
const express = require("express")
const cors = require("cors")
const Router = require('./router/router')
require('./db/dbConnection')

const app = express()
app.use(cors())
app.use(express.json())
app.use(Router)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`app running in the port ${PORT}`)
})

app.get('/',(req,res)=>{
      res.send(`app is running`)
})