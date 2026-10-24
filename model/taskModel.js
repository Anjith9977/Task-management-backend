const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    status:{
        type:String,
        required:true
    }
}
)
const tasks = mongoose.model('tasks',TaskSchema)
module.exports = tasks