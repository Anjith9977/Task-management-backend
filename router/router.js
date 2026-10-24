const express = require('express')
const router = express.Router()
const userController = require('../controller/usercontroller')
const taskController = require('../controller/taskController')



router.post('/registerUser',userController.registerUser)

router.post('/loginUser',userController.loginController)

router.post('/createTask',taskController.createTask)

router.get('/GetTask',taskController.getTaskController)

router.delete('/DeleteTask/:id',taskController.deleteTaskcontroller)


module.exports=router