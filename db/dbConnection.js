const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(res=>{
    console.log("Mongoose connected to database")
})
.catch(error=>{
    console.log("connection failed")
})