const tasks = require('../model/taskModel')

exports.createTask = async (req, res) => {
    console.log("inside createJob controller")

    const { task, description, priority , status } = req.body

    try {

        const existingTask = await tasks.findOne({ task })

        if (existingTask) {
            res.status(409).json("Task already exist")
        }
        else {
            const newTask = tasks({ task, description, priority, status })
            await newTask.save()
            res.status(201).json({
                tasks: {
                    task: newTask.task,
                    description: newTask.description,
                    priority: newTask.priority,
                    status:newTask.status
                }
            })

        }


    }
    catch (error) {
        res.status(500).json(error)


    }

}

exports.getTaskController = async (req, res) => {
    console.log("inside getTaskController")

    try {

        const result = await tasks.find()
        res.status(200).json(result)

    }
    catch (error) {
        res.status(500).json(error)
    }
}


exports.deleteTaskcontroller = async (req, res) => {
    console.log('inside delete')
    const { id } = req.params

    try {

        await tasks.findByIdAndDelete({ _id: id })
        res.status(200).json("Event deleted successfully")

    } catch (error) {
        res.status(500).json(error)
    }
}